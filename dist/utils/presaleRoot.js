"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPresaleProof = void 0;
const merkletreejs_1 = require("merkletreejs");
const keccak256_1 = __importDefault(require("keccak256"));
const ethers_1 = require("ethers");
const presaleList_json_1 = __importDefault(require("../presaleList.json"));
function hashAccount(account) {
    return Buffer.from(ethers_1.ethers.utils.solidityKeccak256(["address"], [account]).slice(2), "hex");
}
const merkleTree = new merkletreejs_1.MerkleTree(presaleList_json_1.default, keccak256_1.default, {
    hashLeaves: true,
    sortPairs: true,
});
function presaleRoot() {
    const root = merkleTree.getHexRoot();
    return root;
}
const getPresaleProof = (address) => {
    const addressKey = presaleList_json_1.default.find((addr) => addr.toLowerCase() === address.toLowerCase());
    console.log(addressKey, merkleTree.getHexProof(hashAccount(addressKey)));
    if (addressKey) {
        return merkleTree.getHexProof(hashAccount(addressKey));
    }
    return [];
};
exports.getPresaleProof = getPresaleProof;
exports.default = presaleRoot;
