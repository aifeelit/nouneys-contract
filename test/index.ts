import { ethers } from "hardhat";
import { assert } from "chai";

const constructorArgs = [
  ethers.utils.parseEther("0.0369"),
  "0xC802883c7633386a592031dCcD04b0d1994928bE",
] as const;

describe("Nouneys", function () {
  it("Should start the sale", async function () {
    const Nouneys = await ethers.getContractFactory("Nouneys");
    const nouneys = await Nouneys.deploy(...constructorArgs);
    await nouneys.deployed();

    assert.isFalse(await nouneys.isSaleActive());
    await nouneys.toggleSaleActive();
    assert.isTrue(await nouneys.isSaleActive());
  });

  it("Should start the presale", async function () {
    const Nouneys = await ethers.getContractFactory("Nouneys");
    const nouneys = await Nouneys.deploy(...constructorArgs);
    await nouneys.deployed();

    assert.isFalse(await nouneys.isPresaleActive());
    await nouneys.togglePresaleActive();
    assert.isTrue(await nouneys.isPresaleActive());
  });

  it("Should be able to mint", async function () {
    const Nouneys = await ethers.getContractFactory("Nouneys");
    const nouneys = await Nouneys.deploy(...constructorArgs);
    await nouneys.deployed();

    assert.isFalse(await nouneys.isSaleActive());
    await nouneys.toggleSaleActive();
    assert.isTrue(await nouneys.isSaleActive());

    await nouneys.setMaxSupply(100);
    await nouneys.setSaleMaxPerWallet(10);

    await nouneys["mint(uint16)"](10, {
      value: (await nouneys.price()).mul(10),
    });

    assert.equal((await nouneys.totalSupply()).toNumber(), 10);
  });

  it("Should be able to mint max supply", async function () {
    const Nouneys = await ethers.getContractFactory("Nouneys");
    const nouneys = await Nouneys.deploy(...constructorArgs);
    await nouneys.deployed();

    assert.isFalse(await nouneys.isSaleActive());
    await nouneys.toggleSaleActive();
    assert.isTrue(await nouneys.isSaleActive());

    await nouneys.setMaxSupply(100);
    await nouneys.setSaleMaxPerWallet(10);

    await nouneys["mint(uint16)"](10, {
      value: (await nouneys.price()).mul(10),
    });

    try {
      await nouneys["mint(uint16)"](1, {
        value: (await nouneys.price()).mul(1),
      });
    } catch (err: any) {
      assert.isTrue(err.message.includes("Max Minted"));
    }

    assert.equal((await nouneys.totalSupply()).toNumber(), 10);
  });
});
