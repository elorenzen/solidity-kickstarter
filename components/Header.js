import React from 'react';
import { Menu } from 'semantic-ui-react';
import Head from 'next/head';

const Header = () => {
    return (
        <Menu style={{ marginTop: '2.5%'}}>
            <Menu.Item name='browse'>
                CrowdCoin
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item name='signup'>
                    Campaigns
                </Menu.Item>

                <Menu.Item 
                    icon='add circle'
                />    
            </Menu.Menu>
        </Menu>
    )
}

export default Header;