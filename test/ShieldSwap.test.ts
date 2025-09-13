import { expect } from "chai";
import { ethers } from "hardhat";
import { ShieldSwap } from "../typechain-types";

describe("ShieldSwap", function () {
  let shieldSwap: ShieldSwap;
  let owner: any;
  let feeCollector: any;

  beforeEach(async function () {
    [owner, feeCollector] = await ethers.getSigners();
    
    const ShieldSwapFactory = await ethers.getContractFactory("ShieldSwap");
    shieldSwap = await ShieldSwapFactory.deploy(feeCollector.address);
    await shieldSwap.waitForDeployment();
  });

  it("Should deploy with correct owner and fee collector", async function () {
    expect(await shieldSwap.owner()).to.equal(owner.address);
    expect(await shieldSwap.feeCollector()).to.equal(feeCollector.address);
  });

  it("Should initialize with correct counters", async function () {
    expect(await shieldSwap.orderCounter()).to.equal(0);
    expect(await shieldSwap.poolCounter()).to.equal(0);
    expect(await shieldSwap.positionCounter()).to.equal(0);
  });

  it("Should allow owner to set fee collector", async function () {
    const newFeeCollector = ethers.Wallet.createRandom().address;
    await shieldSwap.setFeeCollector(newFeeCollector);
    expect(await shieldSwap.feeCollector()).to.equal(newFeeCollector);
  });

  it("Should not allow non-owner to set fee collector", async function () {
    const newFeeCollector = ethers.Wallet.createRandom().address;
    await expect(
      shieldSwap.connect(feeCollector).setFeeCollector(newFeeCollector)
    ).to.be.revertedWith("Only owner can set fee collector");
  });

  it("Should allow owner to add token types", async function () {
    const tokenAddress = ethers.Wallet.createRandom().address;
    const tokenType = 1;
    
    await shieldSwap.addTokenType(tokenAddress, tokenType);
    expect(await shieldSwap.tokenAddresses(tokenType)).to.equal(tokenAddress);
    expect(await shieldSwap.tokenTypes(tokenAddress)).to.equal(tokenType);
  });

  it("Should not allow non-owner to add token types", async function () {
    const tokenAddress = ethers.Wallet.createRandom().address;
    const tokenType = 1;
    
    await expect(
      shieldSwap.connect(feeCollector).addTokenType(tokenAddress, tokenType)
    ).to.be.revertedWith("Only owner can add token types");
  });
});
