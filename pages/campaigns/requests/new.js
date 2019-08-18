import React from 'react';
import Layout from '../../../components/Layout';
import { Grid, Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

export default class NewRequest extends React.Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    };

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        this.setState({ loading: true, errorMessage: '' });
        try {   
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description, 
                web3.utils.toWei(value, 'ether'), 
                recipient
            ).send({ from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>
                                Back
                            </Button>
                        </a>
                    </Link>
                    <Grid.Column width={8}>
                        <h4>Create new request</h4>
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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

                                <Message
                                    error
                                    header='Uh-oh!'
                                    content={this.state.errorMessage}
                                />

                                <Button 
                                    primary 
                                    loading={this.state.loading}
                                >
                                    Submit
                                </Button>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}