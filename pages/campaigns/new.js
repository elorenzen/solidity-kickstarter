import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button } from 'semantic-ui-react';

export default class CampaignNew extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <h1>NEW CAMPAIGN</h1>

                    <Form>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <input />
                        </Form.Field>

                        <Button primary>Create</Button>
                    </Form>
                </Layout>
            </div>
        )
    }
}