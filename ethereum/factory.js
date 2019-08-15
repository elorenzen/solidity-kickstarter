import web3 from './web3';
import CampaignFactory from './build/CampaignDeployment.json';

const contractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xfC4d4acac37a8747272d2d7f02C7F7dEA6B0Ec89'
);

export default contractInstance;