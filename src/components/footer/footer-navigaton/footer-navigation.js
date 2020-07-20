import React from 'react';
import { Link } from "gatsby";
import { GetMenuItems } from "../../../hooks/getMenuItems";

const FooterNav = () => {
    const footerNav = GetMenuItems().footerNav.map((navItem, i) => (
            [
                <Link key={i} to={navItem.path}>{navItem.label}</Link>,
                <span key={i+'after'}>|</span>
            ]
    ));
    return (
        <>
            {footerNav}
        </>
    )
}

export default FooterNav;
