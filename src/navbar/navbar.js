import React, {useState} from 'react'
import './navbar.css'
import {Link}  from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setdropdown] = useState(true)
    return (
        <div className="nav-container">
            <nav className="nav-inner">
            <ul className="nav-left">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><li className="companyLogo" onClick={()=>{window.scrollTo(0, 0)}}> StenbergSecurity</li></Link>
                 <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/products"><li className="productsBtn">Products<img className="caretDown" src="images/caretDown.png"></img></li></Link>
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
                    <p className="suiteBtn"><img src="images/logo.png" className="suiteIcon"  ></img>The Suite</p>
                    <p className="dnsBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  className="dnsIcon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>DNS</p>
                    <p className="dnsBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="adminIcon"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>Admin</p>
                    <p className="adminBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="fleetIcon"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></svg>Fleet</p>
                    <p className="teacherBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="teacherIcon"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>Teacher</p>
                    <p className="beaconBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="beaconIcon"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"></path></svg>Beacon</p>
                </ul>
                <ul className="dropdownFooter">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pricing" onClick={()=>{window.scrollTo(0, 0)}}><p className="suiteBtn">Pricing</p></Link>
                    <p className="adminBtn"><a href="tel:16505429537" className="contact-mobile">Contact Us</a></p>

                    <p className="dnsBtn">Blog</p>
                    <p className="teacherBtn">Success Stories</p>

                    <p className="dnsBtn">Help Center</p>
                </ul>
                <ul className="signupandin">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signin"><p className="signInDrop" onClick={()=>{window.scrollTo(0, 0)}}>Sign in</p></Link>
                   <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/start-free-trial" onClick={()=>{window.scrollTo(0, 0)}}> <p className="signUpDrop">Get started free</p></Link>

                </ul>
            </ul></div>} 

        </div>
    )
}

export default Navbar;
