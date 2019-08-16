import React from 'react';
import factory from '../ethereum/factory';
import { Card, Container, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

export default class CampaignIndex extends React.Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map( address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            }
        });
        return <Card.Group items={items} />
    }

    render() {
        return (
            <div>
                <Layout>
                    <Container>
                        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                        <h3>OPEN CAMPAIGNS</h3>
                        <p>{this.renderCampaigns()}</p>
                        <div>
                            <Button 
                                content='Create New Campaign' 
                                icon='add circle' 
                                labelPosition='right' 
                                primary
                            />
                        </div>
                    </Container>
                </Layout>
            </div>
        )
    };
};