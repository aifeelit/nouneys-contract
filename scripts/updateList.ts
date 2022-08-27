import { ethers } from "hardhat";
import presaleRoot from "../utils/presaleRoot";

async function main() {
  const Nouneys = await ethers.getContractFactory("Nouneys");
  const nouneys = Nouneys.attach(process.env.CONTRACT_ADDRESS!);

  // set presale root
  console.log('Updating presale list...');
  const presaleTx = await nouneys.setPresaleRoot(presaleRoot());
  await presaleTx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
