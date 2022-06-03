const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "function paused() view returns (bool)",
  "function decimals() view returns (uint256)",
  "function isPauser(address) view returns (bool)",
];

console.log("in here");

const contract = new ethers.Contract(
  process.env.SMART_CONTRACT,
  ERC20_ABI,
  provider
);

const smart_contract = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const paused = await contract.paused();
  const totalSupply = await contract.totalSupply();
  const balanceOf = await contract.balanceOf(process.env.ACCOUNT);
  const isPauser = await contract.isPauser(process.env.ACCOUNT);

  console.log("name: ", name);
  console.log("symbol: ", symbol);
  console.log("decimals: ", ethers.utils.formatEther(decimals));
  console.log("totalSupply: ", ethers.utils.formatEther(totalSupply));
  console.log("paused: ", paused);
  console.log("balanceOf: ", ethers.utils.formatEther(balanceOf));
  console.log("isPauser: ", isPauser);
};

smart_contract();
