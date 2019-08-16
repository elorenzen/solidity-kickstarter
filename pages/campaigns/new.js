import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input } from 'semantic-ui-react';

export default class CampaignNew extends React.Component {
    state = {
        minimumContribution: ''
    }

    render() {
        return (
            <div>
                <Layout>
                    <h1>NEW CAMPAIGN</h1>

                    <Form>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <Input
                                label='wei'
                                labelPosition='right'
                                value={this.state.minimumContribution}
                                onChange={e => {
                                    this.setState({ minimumContribution: e.target.value })
                                }}
                            />
                        </Form.Field>

                        <Button primary>Create</Button>
                    </Form>
                </Layout>
            </div>
        )
    }
}