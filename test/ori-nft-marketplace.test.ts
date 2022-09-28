import { ethers } from "hardhat";
import chai from "chai";
import { OrinftMarketplace } from "../typechain/ORINFTMarketplace";

const { expect } = chai;

describe("ORINFTMarketplace", async () => {
  let orinftMarketplace: OrinftMarketplace;
  beforeEach(async () => {
    const orinftMarketplaceFactory = await ethers.getContractFactory(
      "ORINFTMarketplace"
    );
    orinftMarketplace = (await orinftMarketplaceFactory.deploy(
      5
    )) as OrinftMarketplace;
    await orinftMarketplace.deployed();
  });

  it("should return the percent fee", async () => {
    expect(await orinftMarketplace.feePercent()).to.equal(5);
  });
});
