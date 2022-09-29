import { ethers, network } from "hardhat";

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  console.log("network.name ===> ", network.name);

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account ==> ",
    await deployer.getAddress()
  );

  console.log("Account balance ==> ", (await deployer.getBalance()).toString());

  const ORINFTCollection = await ethers.getContractFactory("ORINFTCollection");
  const orinftCollection = await ORINFTCollection.deploy();
  await orinftCollection.deployed();
  console.log("ORINFTCollection address:", orinftCollection.address); // eslint-disable-line no-console

  const ORINFTMarketplace = await ethers.getContractFactory(
    "ORINFTMarketplace"
  );
  const orinftMarketplace = await ORINFTMarketplace.deploy(3);
  await orinftMarketplace.deployed();
  console.log("ORINFTMarketplace address:", orinftMarketplace.address); // eslint-disable-line no-console
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });

/*********** save the contract's artifacts and address in the frontend directory *******/
/*
    saveFrontendFiles(token);

    function saveFrontendFiles(token) {
      const fs = require("fs");
      const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

      if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
      }

      fs.writeFileSync(
        path.join(contractsDir, "contract-address.json"),
        JSON.stringify({ Token: token.address }, undefined, 2)
      );

      const TokenArtifact = artifacts.readArtifactSync("Token");

      fs.writeFileSync(
        path.join(contractsDir, "Token.json"),
        JSON.stringify(TokenArtifact, null, 2)
      );
    }

  */
