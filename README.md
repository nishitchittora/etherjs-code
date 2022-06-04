# Ethers.js by Example

Learn how to use ethers.js from these examples

## Technology Stack & Tools

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Node.js](https://nodejs.org/en/) (To run our scripts and install ethers.js)
- [Infura](https://infura.io/) (Node provider)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ npm install
```

## Ethers.js scripts

### 1_accounts.js - Reads balance of ether of wallet address

- Input your infura project URL

```
$ node src/accounts_balances.js
```

### 2_read_smart_contract.js - Reads the balance of Dai wallet address from the Dai contract

- Input your infura project URL

```
$ node src/2_read_smart_contract.js
```

### 3_transfer.js - Transfers 0.025 ether from account1 to account2

- Input your infura project URL
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key

```
$ node src/3_transfer.js
```

### 4_deploy_contract.js - Deploys contract on Kovan testnet by using Factory contract

- Input your infura project URL
- Input your account private key

```
$ node src/4_deploy_contract.js
```

### 5_write_contract.js - Transfers entire balance of token of your choosing from account1 to account2 (on Kovan testnet)

- Input your infura project URL
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key
- Input contract address of the token you want to transfer (You can use the deployed contract address from the previous script)

```
$ node src/5_write_contract.js
```

### 6_contract_event_stream.js - Queries a block for transfer events

- Input your infura project URL

```
$ node src/6_contract_event_stream.js
```

### 7_inspecting_blocks.js - Get transactions from block

- Input your infura project URL

```
$ node src/7_inspecting_blocks.js
```
