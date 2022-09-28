import { ethers } from "hardhat";
import chai from "chai";
import { OrinftCollection } from "../typechain/ORINFTCollection";

const { expect } = chai;

describe("ORINFTCollection", async () => {
  let orinftCollection: OrinftCollection;
  beforeEach(async () => {
    const orinftCollectionFactory = await ethers.getContractFactory(
      "ORINFTCollection"
    );
    orinftCollection =
      (await orinftCollectionFactory.deploy()) as OrinftCollection;
    await orinftCollection.deployed();
  });

  it("should return the contract name", async () => {
    expect(await orinftCollection.name()).to.equal("ORI NFT collection");
  });

  it("should return the symbol", async () => {
    expect(await orinftCollection.symbol()).to.equal("ORI");
  });

  it("should return the public mint status", async () => {
    expect(await orinftCollection.isPublicMintEnabled()).to.equal(true);
  });
});
