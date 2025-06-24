import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const privateKey = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    baseMainnet: {
      url: process.env.BASE_MAINNET_RPC_URL || "",
      accounts: privateKey ? [privateKey] : [],
    },
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC_URL || "",
      accounts: privateKey ? [privateKey] : [],
    },
  },
};

export default config;

