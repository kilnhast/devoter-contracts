import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("MockDEVToken", function () {
  async function deployMockDEVTokenFixture() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const mockDEVToken = await hre.viem.deployContract("MockDEVToken", [
      getAddress(owner.account.address),
      "Mock DEV Token",
      "mDEV",
    ]);

    const publicClient = await hre.viem.getPublicClient();

    return {
      mockDEVToken,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Delegation", function () {
    it("Should allow a user to delegate their voting power to themselves", async function () {
      const { mockDEVToken, owner } = await loadFixture(
        deployMockDEVTokenFixture
      );

      await mockDEVToken.write.delegate([getAddress(owner.account.address)]);

      const delegate = await mockDEVToken.read.delegates([
        getAddress(owner.account.address),
      ]);
      expect(delegate).to.equal(getAddress(owner.account.address));
    });

    it("Should allow a user to delegate their voting power to another address", async function () {
      const { mockDEVToken, owner, otherAccount } = await loadFixture(
        deployMockDEVTokenFixture
      );

      await mockDEVToken.write.delegate([
        getAddress(otherAccount.account.address),
      ]);

      const delegate = await mockDEVToken.read.delegates([
        getAddress(owner.account.address),
      ]);
      expect(delegate).to.equal(getAddress(otherAccount.account.address));
    });

    it("Should return the correct voting power for a user", async function () {
      const { mockDEVToken, owner } = await loadFixture(
        deployMockDEVTokenFixture
      );
      const balance = await mockDEVToken.read.balanceOf([
        getAddress(owner.account.address),
      ]);

      await mockDEVToken.write.delegate([getAddress(owner.account.address)]);

      const votes = await mockDEVToken.read.getVotes([
        getAddress(owner.account.address),
      ]);
      expect(votes).to.equal(balance);
    });

    it("Should correctly keep track of delegation checkpoints", async function () {
      const { mockDEVToken, owner, publicClient } = await loadFixture(
        deployMockDEVTokenFixture
      );

      await mockDEVToken.write.delegate([getAddress(owner.account.address)]);

      await hre.network.provider.send("evm_mine");
      await hre.network.provider.send("evm_mine");

      const numCheckpoints = await mockDEVToken.read.numCheckpoints([
        getAddress(owner.account.address),
      ]);
      expect(numCheckpoints > 0n).to.be.true;
    });
  });
});
