import React from 'react';
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";

const NavItems = ({navItems})  => {
    const navList = navItems.map((navItem, i) => {
        if (navItem.children.length) {
           return (
               <NavDropdown key={i} title={navItem.label} id="basic-nav-dropdown">
                   {navItem.children.map((navItemChild, j) => (
                       <NavDropdown.Item
                           key={`${i}-${j}`}
                           as={Link}
                           to={navItemChild.path}>
                           {navItemChild.label}
                       </NavDropdown.Item>
                   ))}
               </NavDropdown>
           )
        }
        return <Nav.Link key={i} as={Link} to={navItem.path}>{navItem.label}</Nav.Link>
    })

    return (
        <Nav className={'m-auto'}>
            {navList}
        </Nav>
    )
}

export default NavItems;
