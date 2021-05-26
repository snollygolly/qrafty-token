# qrafty-token
:money_with_wings:  A token for rewarding great work


## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 10 and up recommended, async/await support required)
* [Ganache](https://www.trufflesuite.com/ganache) Not strictly required, but useful for local debugging

### Installation

* Clone down the repository.
```
git clone https://github.com/snollygolly/qrafty-token.git
```

* Install dependencies
```
npm install
```

* Create your config.json file. There is a `config.example.json` provided in the format you need. 

* Sign up with your preferred vendor and input the https value in "rpc"

* Enter the owner's 12 word mnemonic. This account will be marked as the "owner" of the account.

## WARNING(s)

*MAKE SURE YOU DON'T LOSE YOUR MNEMONIC AND DON'T SEND IT TO ANYONE EVER*

*DO NOT PUT YOUR REAL WALLET MNEMONIC IN THE EXAMPLE CONFIG, PUT IT IN YOUR CONFIG.JSON*


### Smart Contract

#### Local Deployment

- To compile the contract and get it ready for deployment:
```
npx hardhat compile
```

- To deploy the contract and put it on the ganache local testnet (this is the default):
```
npx hardhat run scripts/deploy.js --network ganache
```

- To deploy on a different network, replace ganache with one of the following:

  - localhost: hardhat based debugging node
  - ropsten: etherum proof-of-work testnet
  - eth_live: etherum mainnet
  - bsc_testnet: binance smart chain testnet
  - bsc_live: binance smart chain mainnet

- To start a debugging node:
```
npx hardhat node
```

##### Unit Tests

To run the tests:

````
npx hardhat test
````
