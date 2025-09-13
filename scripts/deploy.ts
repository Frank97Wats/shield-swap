import { ethers } from "hardhat";

async function main() {
  console.log("Deploying ShieldSwap contract...");

  // Get the contract factory
  const ShieldSwap = await ethers.getContractFactory("ShieldSwap");
  
  // Deploy the contract with a fee collector address
  // You can change this to your desired fee collector address
  const feeCollector = "0x0000000000000000000000000000000000000000"; // Replace with actual address
  
  const shieldSwap = await ShieldSwap.deploy(feeCollector);
  
  await shieldSwap.waitForDeployment();
  
  const address = await shieldSwap.getAddress();
  
  console.log("ShieldSwap deployed to:", address);
  console.log("Fee collector set to:", feeCollector);
  
  // Save the deployment info
  const deploymentInfo = {
    contractAddress: address,
    feeCollector: feeCollector,
    network: "sepolia",
    timestamp: new Date().toISOString(),
    deployer: await ethers.provider.getSigner().getAddress()
  };
  
  console.log("Deployment info:", JSON.stringify(deploymentInfo, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
