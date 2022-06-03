const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const account_balance = async () => {
  const balance = await provider.getBalance(process.env.ACCOUNT);
  console.log(ethers.utils.formatEther(balance));
};

account_balance();
