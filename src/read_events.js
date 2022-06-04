const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const contract = new ethers.Contract(
  process.env.SMART_CONTRACT,
  ERC20_ABI,
  provider
);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 10,
    block
  );
  console.log(transferEvents.length);
};

main();
