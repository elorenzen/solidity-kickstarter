import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

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
                description: 'This is the minimum contribution in wei required to join this campaign.'
            },
            {
                header: totalRequests,
                meta: 'Total Requests',
                description: 'This is the number of requests to withdraw wei. Requests must be approved by contributors.'
            },
            {
                header: approversCount,
                meta: 'Number of Contributors',
                description: 'This is the number of contributors for this campaign.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Total funding(eth)',
                description: 'This is the total funding in ethereum of this campaign'
            }
        ]
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm />
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}