const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log(block);

  const blockInfo = await provider.getBlock();
  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);
  console.log(transactions[0]);
};

main();
