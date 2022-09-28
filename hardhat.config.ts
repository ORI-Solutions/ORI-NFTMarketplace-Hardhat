import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const ROPSTEN_PRIVATE_KEY =
  process.env.ROPSTEN_PRIVATE_KEY ||
  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const { ETHERSCAN_API_KEY } = process.env;

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
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
    coverage: {
      url: "http://127.0.0.1:8555",
    },
    hardhat: {
      chainId: 31337,
    },
    // kovan: {
    //   url: KOVAN_RPC_URL,
    //   accounts: [KOVAN_PRIVATE_KEY],
    //   chainId: 42,
    // },
    // rinkeby: {
    //   url: RINKEBY_RPC_URL,
    //   accounts: [RINKEBY_PRIVATE_KEY],
    //   chainId: 4,
    // },
    // mumbai: {
    //   url: MUMBAI_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 80001,
    // },
    // polygon: {
    //   url: POLYGON_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 137,
    // },
    //   bsc_mainnet: {
    //     url: "https://bsc-dataseed.binance.org",
    //     chainId: 56,
    //     gasPrice: 20000000000,
    //     accounts: [PKEY]
    // },
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
