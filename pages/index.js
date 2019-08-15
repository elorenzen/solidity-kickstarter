import React from 'react';
import factory from '../ethereum/factory';

export default class CampaignIndex extends React.Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
    }
    render() {
        return (
            <h1>Show page!!!!!</h1>
        )
    }
};