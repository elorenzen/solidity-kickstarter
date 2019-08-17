import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';

export default class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
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