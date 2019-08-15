import React from 'react';
import factory from '../ethereum/factory';
//import 'semantic-ui-css/semantic.min.css';
import { Card, Container } from 'semantic-ui-react';

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
            <Container>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <h1>CAMPAIGNS</h1>
                <p>{this.renderCampaigns()}</p>
            </Container>
        )
    };
};