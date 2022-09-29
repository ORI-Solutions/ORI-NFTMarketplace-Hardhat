const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root(".env") });

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

export { PRIVATE_KEY, ETHERSCAN_API_KEY };
