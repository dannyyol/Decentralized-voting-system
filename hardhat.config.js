require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    paths: {
        artifacts: './src/artifacts/',
    },
    networks: {
        hardhat:{
            chainId: 1337
        }
        // rinkeby: {
        //     url: process.env.ALCHEMY_RINKEBY_URL,
        //     accounts: [process.env.ACCOUNT_PRIVATE_KEY],
        // },
    },
};
