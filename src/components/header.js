import React from "react"
import { Link } from "gatsby";
import Navigation from "./navigation";
import './headerStyles.scss';


const Header = () => (
    <header className="banner">
        <div className="container">
            <div className="header-wrap">
                <div className="logo-wrap">
                    <Link className="brand" to="/">Verdi Oncology logo</Link>
                </div>
                <div className="header-right">
                    Call <a className="invoca" href="tel:214-739-1706">214-739-1706</a>
                    <Link to="/contact-us">
                        <button className="header-btn">Book Online</button>
                    </Link>
                </div>
            </div>
        </div>
        <Navigation/>
    </header>
)

export default Header
