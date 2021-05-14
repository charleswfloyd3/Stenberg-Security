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
                <p className="contactSectionTitle"><a  href="" style={{color:"royalblue", textDecoration:"none"}}>SteinbergSecurity</a></p>
                <p className="brandDescrip">
                    A community collectively saving businesses, schools, and indivuals millions every day since 2008.
                </p>
                <div className="appStores">
                    <img src="images/appStore.png"className="appStore"></img>
                    <img src="images/googlePlay.png" className="googlePlay"></img>
                </div>
                <div className="socialMedia">
                    <img src="images/facebook.png" className="socialIcon"></img>
                    <img src="images/instagram.png"  className="socialIcon"></img>
                    <img src="images/twitter.png"  className="socialIcon"></img>                     <img src="images/linkedIn.png"  className="socialIcon"></img>                     <img src="images/youtube.png"  className="socialIcon"></img>
                    <img src="images/medium.png"  className="socialIcon"></img>                   
                </div>
            </ul>
        </div>
    )
}

export default Footer;
