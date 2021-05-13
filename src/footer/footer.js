import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <ul className="companySection"> 
                <p className="companySectionTitle">Company</p>
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Newsroom</li>

            </ul>
            <ul className="servicesSection"> 
                <p className="servicesSectionTitle">Services</p>
                <li>Phising Prevention</li>
                <li>DDOS Blocker</li>
                <li>Backend Encryption</li>
                <li>Protection Deluxe Bundle</li>
            </ul>
            <ul className="supportSection"> 
                <p className="supportSectionTitle">Support</p>
                <li>Help Center</li>
                <li>Video Training</li>
                <li>Status Page</li>
                <li>Trust &amp; Privacy </li>                
            </ul>
            <ul className="contactSection"> 
                <p className="contactSectionTitle">Contact</p>
                <li> (650) 542-9537</li>
                <li>support@steinbergsecurity.com</li>
            </ul>
        </div>
    )
}

export default Footer;
