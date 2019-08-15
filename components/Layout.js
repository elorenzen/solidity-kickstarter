import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <h1>HEADER WILL GO HERE</h1>
            <div>{props.children}</div>
            <h1>FOOTER WILL GO HERE</h1>
        </div>
    )
};

export default Layout;