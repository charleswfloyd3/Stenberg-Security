import React from 'react'
import './footer.css'
import {Link}  from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-outer">
            <div className="footer-top">
                <img src="images/cloud.png" className="aff" alt="google cloud"></img>
                <img src="images/microsoft.png" className="aff" alt="microsoft"></img>
                <img src="images/student.jpg" className="aff" alt="student"></img>
                <img src="images/ferpa.jpg" className="aff" alt="ferpa"></img>
                <img src="images/ida.jpg" className="aff" alt="ida"></img>
                <img src="images/gei.jpg" className="aff" alt="gei"></img>
            </div>
           <div className="footer-top-mobile">
               <div className="footer-top-mobile-top">             <img src="images/microsoft.png" className="aff" alt="microsoft"></img> <img src="images/cloud.png" className="aff" alt="google cloud"></img>
   
                <img src="images/student.jpg" className="aff" alt="student privacy pledge"></img>

                </div>
               <div className="footer-top-mobile-bottom">
                <img src="images/ferpa.jpg" className="aff" alt="ferpa"></img>                   
                <img src="images/ida.jpg" className="aff" alt="ida"></img>
                <img src="images/gei.jpg" className="aff" alt="gei"></img>
                </div>
            </div>
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
                <p ><Link  href="" style={{color:"royalblue", textDecoration:"none"}} to="/" className="contactSectionTitle" onClick={()=>{window.scrollTo(0, 0)}}>StenbergSecurity</Link></p>
                <p className="brandDescrip">
                    A community collectively saving businesses, schools, and indivuals millions every day since 2008.
                </p>
                <div className="appStores">
                    <img src="images/appStore.png"className="appStore"alt="app store"></img>
                    <img src="images/googlePlay.png" className="googlePlay" alt="google play"></img>
                </div>
                <div className="socialMedia">
                    <img src="images/facebook.png" className="socialIcon" alt='facebook'></img>
                    <img src="images/instagram.png"  className="socialIcon" alt="instagram"></img>
                    <img src="images/twitter.png"  className="socialIcon" alt="twitter"></img>                     <img src="images/linkedIn.png"  className="socialIcon" alt="linkedIn"></img>                     <img src="images/youtube.png"  className="socialIcon" alt="youtube"></img>
                    <img src="images/medium.png"  className="socialIcon" alt="medium"></img>                   
                </div>
                {/* <p>SteinbergSecurity 2021. All rights reserved&copy;</p> */}
            </ul>
        </div>
                    <ul className="contactSection-mobile"> 
                <p ><Link style={{color:"royalblue", textDecoration:"none"}} to="/" className="contactSectionTitle" >StenbergSecurity</Link></p>
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
                {/* <p>SteinbergSecurity 2021. All rights reserved&copy;</p> */}
            </ul>
        </div>
    )
}

export default Footer;
