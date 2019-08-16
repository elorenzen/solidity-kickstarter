import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes'

export default class CampaignIndex extends React.Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map( address => {
            return {
                header: address,
                description:(
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>OPEN CAMPAIGNS</h3>
                    <Link route='/campaigns/new'>
                        <a>
                            <Button 
                                content='Create New Campaign' 
                                icon='add circle' 
                                labelPosition='right' 
                                primary
                                floated='right'
                            />
                        </a>
                    </Link>
                    <p>{this.renderCampaigns()}</p>
                </div>
            </Layout>
        )
    };
};