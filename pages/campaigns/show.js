import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

export default class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        
        const campaign = Campaign(props.query.campaign_id);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary);
        
        return {};
    };

    render() {
        return (
            <Layout>
                <div>Campaign NAME_GOES_HERE</div>
            </Layout>
        )
    }
}