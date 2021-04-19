const path = require("path") ;

const HDWalletProvider = require("@truffle/hdwallet-provider") ;
//npm install @truffle/hdwallet-provider
const infuraKey = "9a7b9dce5c814e9ab4ce12b57a770e55" ;

const fs = require('fs') ;
//Add .secret file in your root folder and place your HD wallet mnemonics in that file.
//e.g mnemonics of Metamask wallet
const mnemonic = fs.readFileSync("./secret.txt").toString().trim() ;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten:{
      provider: () => new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 5500000,
    },
  }
};
