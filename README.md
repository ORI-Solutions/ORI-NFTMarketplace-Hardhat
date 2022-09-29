<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# ORI NFT Marketplace Hardhat Project

## Tasks

Build the project

```shell
yarn run build
```

Clean the project

```shell
yarn run clean
```

Compile the project

```shell
yarn run compile
```

Run tests

```shell
yarn test
```

Run test deploy (Hardhat's temporary testing network)

```shell
yarn deploy-hardhat
```

Generate code coverage

```shell
yarn run coverage
```

## Test deploy (Hardhat's local testing network)

Once installed, let's run Hardhat's testing network:

```shell
npx hardhat node
```

Then, deploy your contract :

```shell
npx hardhat run scripts/deploy.ts --network localhost
```

## Deploy

mumbai:

```shell
yarn run deploy-mumbai
```

polygon:

```shell
yarn run deploy-polygon
```

bsc_testnet:

```shell
yarn run deploy-bsc_testnet
```

bsc_mainnet:

```shell
yarn run deploy-bsc_mainnet
```

## Verify Command​

⚠️ Warning: Remove any unnecessary contracts and clear the artifacts otherwise these will also be part of the verified contract.

Run the following command:

for ORINFTMarketplace (3 - is a contract constructor parameter):

```
npx build verify --network bsc_testnet 0x349dcEBC884Dc783f2473057564c6CEE04a42663 3
```

example for ORINFTCollection:

```
$ npx hardhat  verify --network bsc_testnet 0x3F10716bA75239EC39f402d670e6dAE91c5C3Dca
Compiled 16 Solidity files successfully
Creating Typechain artifacts in directory typechain for target ethers-v5
Successfully generated Typechain artifacts!
Successfully submitted source code for contract
contracts/ORINFTCollection.sol:ORINFTCollection at 0x3F10716bA75239EC39f402d670e6dAE91c5C3Dca
for verification on Etherscan. Waiting for verification result...

Successfully verified contract ORINFTCollection on Etherscan.
https://testnet.bscscan.com/address/0x3F10716bA75239EC39f402d670e6dAE91c5C3Dca#code
```

[license-shield]: https://img.shields.io/github/license/kshvab/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ORI-Solutions/ORI-NFTMarketplace-Hardhat/blob/development/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kshvab/
