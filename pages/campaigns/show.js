import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

export default class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary['0']);
        
        return { 
            address: props.query.address,
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
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}               
                        </Grid.Column>
                        
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>
            </Layout>
        )
    }
}