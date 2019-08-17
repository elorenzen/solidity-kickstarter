import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';

export default class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        
        const campaign = Campaign(props.query.campaign_id);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary['0']);
        
        return { 
            minimumContribution: summary['0'],
            balance: summary['1'],
            totalRequests: summary['2'],
            approversCount: summary['3'],
            creator: summary['4']
        };
    };

    renderCards() {
        const {
            minimumContribution,
            balance,
            totalRequests,
            approversCount,
            creator
        } = this.props;

        const items = [
            {
                header: creator,
                meta: 'Creator Address',
                description: 'The creator of this campaign can make requests to withdraw money.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution',
                description: 'This is the minimum contribution required to join this campaign.'
            },
            {
                header: totalRequests,
                meta: 'Total Requests',
                description: 'This is the number of requests.'
            }
        ]
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                {this.renderCards()}
            </Layout>
        )
    }
}