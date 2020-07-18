import React from 'react';
import { Navbar } from "react-bootstrap";
import NavItems from "./nav-items";
import { GetMenuItems } from "../hooks/getMenuItems";

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavItems navItems={GetMenuItems()}/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
