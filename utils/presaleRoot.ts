import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { ethers } from "ethers";
import presaleList from "../presaleList.json";

function hashAccount(account: string) {
  return Buffer.from(
    ethers.utils.solidityKeccak256(["address"], [account]).slice(2),
    "hex"
  );
}

const merkleTree = new MerkleTree(presaleList, keccak256, {
  hashLeaves: true,
  sortPairs: true,
});

function presaleRoot() {
  const root = merkleTree.getHexRoot();
  return root;
}

export const getPresaleProof = (address: string) => {
  const addressKey = presaleList.find(
    (addr) => addr.toLowerCase() === address.toLowerCase()
  );

  if (addressKey) {
    return merkleTree.getHexProof(hashAccount(addressKey));
  }

  return [];
};

export default presaleRoot;
