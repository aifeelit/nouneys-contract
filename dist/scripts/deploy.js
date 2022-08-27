"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const presaleRoot_1 = __importDefault(require("../utils/presaleRoot"));
const constructorArgs = [
    hardhat_1.ethers.utils.parseEther("0.0369"),
    "0xc802883c7633386a592031dccd04b0d1994928be",
];
async function main() {
    await (0, hardhat_1.run)("compile");
    // We get the contract to deploy
    const Nouneys = await hardhat_1.ethers.getContractFactory("Nouneys");
    const nouneys = await Nouneys.deploy(...constructorArgs);
    await nouneys.deployed();
    const results = await hardhat_1.ethers.provider.waitForTransaction(nouneys.deployTransaction.hash);
    console.log("Nouneys deployed to:", results.contractAddress);
    await nouneys.deployTransaction.wait(5);
    // set presale root
    console.log("Updating presale list...");
    const presaleTx = await nouneys.setPresaleRoot((0, presaleRoot_1.default)());
    await presaleTx.wait();
    // set base URI
    console.log("Setting Base URI...");
    const baseURITx = await nouneys.setBaseURI("https://nouneys-metadata.s3.us-west-2.amazonaws.com/");
    await baseURITx.wait();
    await (0, hardhat_1.run)("verify:verify", {
        address: results.contractAddress,
        constructorArguments: constructorArgs,
    });
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
