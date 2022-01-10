import React, {Component} from 'react';
import factory from '../ethereum/contracts/factory';

class CampaignIndex extends Component {
    async componentDidMount(){
       const campaigns =  await factory.methods.getDeployedCampaigns().call();

       console.log(campaigns);
    }

    render(){
        return <div>Campaigns HomePage!</div>
    }
}

export default CampaignIndex;