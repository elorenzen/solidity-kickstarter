import React from 'react';
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

export default class RequestRow extends React.Component {
    render() {
        console.log(this.props)
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{this.props.id}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell>{web3.utils.fromWei(this.props.request.value, 'ether')}</Cell>
                <Cell>{this.props.request.recipient}</Cell>
                <Cell>{this.props.request.approvalCount} / {this.props.approversCount}</Cell>
            </Row>
        )
    }
}