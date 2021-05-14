import React from 'react'
import './navbar.css'
import {Link}  from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="nav-inner">
            <ul className="nav-left">
                <li className="companyLogo" > <a href="" style={{color:"royalblue", textDecoration:"none"}}>SteinbergSecurity</a></li>
                <li className="productsBtn">Products<img className="caretDown" src="images/caretDown.png"></img></li>
                <li className="resourcesBtn">Resources<img className="caretDown" src="images/caretDown.png"></img></li>
                <li className="pricingBtn">Pricing</li>

            </ul>
            <ul className="nav-right">
                <li className="phoneBtn"><img src="images/phone.png" className="phoneIcon"></img> &nbsp; 1 (650) 542-9537</li>
                <li className="signinBtn"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signin">Sign in</Link></li>
                <li className="getstartedBtn">Get started free</li>

            </ul>
            </nav>
            <ul className="hamburgerIcon">
                &#9776;
            </ul>
        </div>
    )
}

export default Navbar;
