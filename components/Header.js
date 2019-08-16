import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Header = () => {
    return (
        <Menu>
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