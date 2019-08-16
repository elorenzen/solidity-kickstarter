import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';

const Layout = (props) => {
    return (
        <Container>
            <Header />
            <div>{props.children}</div>
        </Container>
    )
};

export default Layout;