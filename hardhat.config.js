require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    chainID: {
      url: "http://127.0.0.1:8545", // replace with your node URL
      chainId: 31337
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

