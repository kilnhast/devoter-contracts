const hre = require("hardhat");

async function main() {
  const publicClient = await hre.viem.getPublicClient();
  const blockNumber = await publicClient.getBlockNumber();
  console.log("Successfully connected to the network!");
  console.log("Current block number:", blockNumber.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 