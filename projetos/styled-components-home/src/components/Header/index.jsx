import React from 'react';

import { Nav, NavItem } from './styles';

function Header() {
    return (
        <>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Sobre</NavItem>
                <NavItem>Contato</NavItem>
            </Nav>
        </>
    );
}

export default Header;