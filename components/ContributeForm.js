import React from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class ContributeForm extends React.Component {

    state = {
        value: '',
        loading: false,
        errorMessage: ''
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute()
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });
            
            Router.pushRoute('/');

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }

    render() {
        console.log(this.props.address)
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                        label='ether' 
                        labelPosition='right'
                    />
                </Form.Field>
                <Button
                    loading={this.state.loading} 
                    primary
                >
                    CONTRIBUTE
                </Button>
            </Form>
        )
    }
}