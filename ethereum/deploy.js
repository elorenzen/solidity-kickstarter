const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignDeployment.json');

const provider = new HDWalletProvider(
    // Mnemonic
    'host pulse bless hire lottery trust label barely eyebrow awful truck ripple',
    // Link to connect to deploy contract
    'https://rinkeby.infura.io/v3/65d6489ea67c4bd69a9592536b1682dd'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] })
        
    console.log('Contract deployed to ', result.options.address);
};
deploy();