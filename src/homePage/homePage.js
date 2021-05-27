import React from 'react'
import './homepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomePage = () => {
AOS.init();

    return (
  
        <div className="homepage" data-aos="fade-down" data-aos-duration="600" >
        <div className="homepage-inner">
            <div className='homepage-left'>
                <p className="headline">Saving People<br></br>Millions Everyday.</p>
                <p className="description">
                    Protecting your computer is more important now than ever. Security breaches and financial scams have increased by over 70% since the start of the pandemic.
                    Don't be cheap and pay later. For the cost of  a cup of coffee a month, you'll be secure, guaranteed. Be smart and start saving now. 
                </p>
                <div className="infoBtns">
                    <p className="infoBtn">Get more Info</p>
                    <p className="exploreBtn">Explore the suite</p>
                </div>
            </div>

            <div className='homepage-right' >
                <img src="images/safety.jpg" className="homepageImage"></img>
            </div>

            <div className='homepage-left-mobile'>
                <p className="headline-mobile">Saving People Millions Everyday.</p>
                <p className="headline-mobile2">Saving People<br></br> Millions Everyday.</p>

                <p className="description-mobile">
                    Protecting your computer is more important now than ever. Security breaches and financial scams have increased by over 70% since the start of the pandemic.
                    Don't be cheap and pay later. For the cost of  a cup of coffee a month, you'll be secure, guaranteed. Be smart and start saving now. 
                </p>
                <div className="infoBtns-mobile">
                    <p className="infoBtn-mobile">Get more Info</p>
                    <p className="exploreBtn-mobile">Explore the suite</p>
                </div>
            </div>
            
        </div>
     </div>

    )
}

export default HomePage;
