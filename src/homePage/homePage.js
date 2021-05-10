import React from 'react'
import './homepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const HomePage = () => {
AOS.init();

    return (
        <div className="homepage" data-aos="fade-down" data-aos-duration="600" >

            <div className='homepage-left'>
                <p className="headline">Saving People<br></br>Millions Everyday.</p>
                <p className="description">
                    Protecting your computer is more important now then ever. Security breaches and financial scams have increased by over 70% since the start of the pandemic.
                    Don't be cheap and pay later. For the cost of  a cup of coffee a month, you'll be secure, guaranteed. Don't be cheap, be smart and start saving now. 
                </p>
                <div className="infoBtns">
                    <p className="infoBtn">Get more Info</p>
                    <p className="exploreBtn">Explore the suite</p>
                </div>
            </div>

            <div className='homepage-right' >
                <img src="images/safety.jpg" className="homepageImage"></img>
            </div>
        </div>
    )
}

export default HomePage;
