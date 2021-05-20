import React, {useState} from 'react'
import './navbar.css'
import {Link}  from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setdropdown] = useState(true)
    return (
        <div className="nav-container">
            <nav className="nav-inner">
            <ul className="nav-left">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><li className="companyLogo" onClick={()=>{window.scrollTo(0, 0)}}> SteinbergSecurity</li></Link>
                <li className="productsBtn">Products<img className="caretDown" src="images/caretDown.png"></img></li>
                <li className="resourcesBtn">Resources<img className="caretDown" src="images/caretDown.png"></img></li>
                 <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pricing"><li className="pricingBtn" onClick={()=>{window.scrollTo(0, 0)}}>Pricing</li></Link>

            </ul>
            <ul className="nav-right">
                <li className="phoneBtn"><img src="images/phone.png" className="phoneIcon"></img> &nbsp;<a href="tel:+1650-542-9537" style={{textDecoration:"none", color:"inherit"}}>1 (650) 542-9537</a> </li>
                <li className="signinBtn" onClick={()=>{window.scrollTo(0, 0)}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signin">Sign in</Link></li>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/start-free-trial"><li className="getstartedBtn" onClick={()=>{window.scrollTo(0, 0)}}>Get started free</li></Link>

            </ul>
            </nav>
           {dropdown ? <ul className="hamburgerIcon" onClick={()=>{setdropdown(false)}}>&#9776;</ul>:
            <div><ul className="hamburgerIcon" onClick={()=>{setdropdown(true)}}>&#10006;</ul>            <ul className="navDropdown">
                <p className="dropdownTitle">Products</p>
                <ul className="productsDropdown">
                    <p className="suiteBtn">The Suite</p>
                    <p className="dnsBtn">DNS</p>
                    <p className="dnsBtn">Admin</p>
                    <p className="adminBtn">Fleet</p>
                    <p className="teacherBtn">Teacher</p>
                    <p className="beaconBtn">Beacon</p>
                </ul>
                <ul className="dropdownFooter">
                    <p className="suiteBtn">Pricing</p>
                    <p className="adminBtn">Contact Us</p>

                    <p className="dnsBtn">Blog</p>
                    <p className="teacherBtn">Success Stories</p>

                    <p className="dnsBtn">Help Center</p>
                </ul>
                <ul className="signupandin">
                    <p className="signInDrop">Sign in</p>
                    <p className="signUpDrop">Get started free</p>

                </ul>
            </ul></div>} 

        </div>
    )
}

export default Navbar;
