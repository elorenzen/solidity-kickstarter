import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';

export default class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call;

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount };
    }

    render() {
        return (
            <Layout>
                <h3>REQUEST LIST</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Create request</Button>
                    </a>
                </Link>
            </Layout>
        )
    }
}