import React from 'react';
import Layout from '../../../components/Layout';
import { Grid, Button, Form, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

export default class NewRequest extends React.Component {
    state = {
        value: '',
        description: '',
        recipient: ''
    };

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={8}>
                        <h4>Create new request</h4>
                        <Form>
                            <Form.Field>
                                <label>Description</label>
                                <Input 
                                    value={this.state.description}
                                    onChange={ e => this.setState({ description: e.target.value })}
                                />

                                <label>Amount in ether</label>
                                <Input 
                                    value={this.state.value}
                                    onChange={ e => this.setState({ value: e.target.value })}
                                />

                                <label>Recipient</label>
                                <Input 
                                    value={this.state.recipient}
                                    onChange={ e => this.setState({ recipient: e.target.value })}
                                />
                                <Button primary>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}