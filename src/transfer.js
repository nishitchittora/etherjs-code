const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const account1 = process.env.ACCOUNT1;
const account2 = process.env.ACCOUNT2;

const privateKey = process.env.PRIVATEKEY;

const wallet = new ethers.Wallet(privateKey, provider);

const main = async () => {
  const senderBalancerBefore = await provider.getBalance(account1);
  const receiveBalancerBefore = await provider.getBalance(account2);

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025"),
  });

  await tx.wait();
  console.log(tx);

  const senderBalancerAfter = await provider.getBalance(account1);
  const receiveBalancerAfter = await provider.getBalance(account2);
};
