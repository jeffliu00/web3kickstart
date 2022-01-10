import web3 from './web3';
import CampaignFactory from '../build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x296A03e68f860F97560467De1C90EbC1B533B695'
);

export default instance;