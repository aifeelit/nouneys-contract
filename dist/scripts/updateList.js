"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const presaleRoot_1 = __importDefault(require("../utils/presaleRoot"));
async function main() {
    const Nouneys = await hardhat_1.ethers.getContractFactory("Nouneys");
    const nouneys = Nouneys.attach(process.env.CONTRACT_ADDRESS);
    // set presale root
    console.log('Updating presale list...');
    const presaleTx = await nouneys.setPresaleRoot((0, presaleRoot_1.default)());
    await presaleTx.wait();
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
