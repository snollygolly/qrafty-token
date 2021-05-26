require("@nomiclabs/hardhat-waffle");
const localConfig = require("./config.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: "ganache",
	networks: {
		hardhat: {
			accounts: {
				mnemonic: localConfig.local.phrase
			}
		},
		ganache: {
			url: localConfig.local.rpc,
			accounts: {
				mnemonic: localConfig.local.phrase
			}
		},
		ropsten: {
			url: localConfig.ethtestnet.rpc,
			accounts: {
				mnemonic: localConfig.ethtestnet.phrase
			}
		},
		eth_live: {
			url: localConfig.ethmainnet.rpc,
			accounts: {
				mnemonic: localConfig.ethmainnet.phrase
			}
		},
		bsc_testnet: {
			url: localConfig.bsctestnet.rpc,
			accounts: {
				mnemonic: localConfig.bsctestnet.phrase
			}
		},
		bsc_live: {
			url: localConfig.bscmainnet.rpc,
			accounts: {
				mnemonic: localConfig.bscmainnet.phrase
			}
		},
	},
	solidity: "0.4.23",
};