import { ethers } from "hardhat";

async function main() {
  const ORINFTCollection = await ethers.getContractFactory("ORINFTCollection");
  const orinftCollection = await ORINFTCollection.deploy();
  await orinftCollection.deployed();
  console.log("Greeter address:", orinftCollection.address); // eslint-disable-line no-console
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
