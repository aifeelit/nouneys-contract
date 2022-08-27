import { ethers, run } from "hardhat";
import presaleRoot from "../utils/presaleRoot";

const constructorArgs = [
  ethers.utils.parseEther("0.0369"),
  "0xc802883c7633386a592031dccd04b0d1994928be",
] as const;

async function main() {
  await run("compile");

  // We get the contract to deploy
  const Nouneys = await ethers.getContractFactory("Nouneys");
  const nouneys = await Nouneys.deploy(...constructorArgs);
  await nouneys.deployed();

  const results = await ethers.provider.waitForTransaction(
    nouneys.deployTransaction.hash
  );

  console.log("Nouneys deployed to:", results.contractAddress);

  await nouneys.deployTransaction.wait(5);

  // set presale root
  console.log("Updating presale list...");
  const presaleTx = await nouneys.setPresaleRoot(presaleRoot());
  await presaleTx.wait();

  // set base URI
  console.log("Setting Base URI...");
  const baseURITx = await nouneys.setBaseURI(
    "https://nouneys-metadata.s3.us-west-2.amazonaws.com/"
  );
  await baseURITx.wait();

  await run("verify:verify", {
    address: results.contractAddress,
    constructorArguments: constructorArgs,
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
