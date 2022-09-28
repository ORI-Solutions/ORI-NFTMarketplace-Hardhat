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
