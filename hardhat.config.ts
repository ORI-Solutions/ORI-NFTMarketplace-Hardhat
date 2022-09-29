import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";

import { PRIVATE_KEY, ETHERSCAN_API_KEY } from "./config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
      },
    ],
  },
  networks: {
    coverage: {
      url: "http://127.0.0.1:8555",
    },
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: "https://poligon-rpc.com",
      accounts: [PRIVATE_KEY],
      chainId: 137,
    },
    bsc_testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
