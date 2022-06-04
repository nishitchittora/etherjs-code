const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const account1 = process.env.ACCOUNT1;
const account2 = process.env.ACCOUNT2;

const privateKey = process.env.PRIVATEKEY;

const wallet = new ethers.Wallet(privateKey, provider);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "function paused() view returns (bool)",
  "function decimals() view returns (uint256)",
  "function isPauser(address) view returns (bool)",
  "function transfer(address to, uint amount) view returns (bool)",
];

const contract = new ethers.Contract(
  process.env.SMART_CONTRACT,
  ERC20_ABI,
  provider
);

const main = async () => {
  const senderBalancerBefore = await contract.getBalance(account1);
  const receiveBalancerBefore = await contract.getBalance(account2);

  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transfer(account2, balance);

  await tx.wait();
  console.log(tx);

  const senderBalancerAfter = await contract.getBalance(account1);
  const receiveBalancerAfter = await contract.getBalance(account2);
};

main();
