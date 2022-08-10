const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
   "length age easily month unfair eternal same body tobacco vote adapt old",
   'https://rinkeby.infura.io/v3/14ed1846934342d7b20db04829db80bf'  
);

const web3 =new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account",accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: ['Hi there!']}).send({gas: '1000000', from: accounts[0]});
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();