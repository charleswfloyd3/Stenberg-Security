import React from 'react'
import '../signup/signup.css'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Pricing = () => {
    return (
        <div>
          <Navbar />
        <div className="signup-container">
            <div className="signup-inner">
                <div className="signup-left">
                    <p className="signupTitle2">Request a quote</p>
                    <p className="signupDescrip">
                        With a suite that includes multi-OS device filtering and monitoring, backend encrytopn, and phising prevention, SteinbergSecurity has everything you need to support a successful  technology program.
                    </p>
                    <LazyLoadImage src="images/stack.jpg" className="signupImage"/>
                </div>
                <div className="signup-right">
                <form action="/action_page.php" className="signupform">
                        <p className="firstnameTitle">First name</p>
                        <input type="text" name="fname" className="fnameInput" ></input>
                        <p className="lastnameTitle">Last name</p>
                        <input type="text" name="lname" className="lnameInput"></input>
                        <p className="emailTitleSignup">Email</p>
                        <input type="email" name="email2" className="emailInput2"></input>
                        <p className="jobTitle">Are you representing yourself or an organization?</p>
                        <input type="text" name="personProtected" placeholder="Please select an option" className="jobInput"></input>
                        <p className="phoneNumTitle">Phone number</p>
                        <input type="text" name="number" className="phoneNumInput"></input>
                        <p className="productTitle">Which product are you primarily interested in?</p>
                        <input type="text" name="product" className="productInput"></input>
                        <p className="countryTitle">Country</p>
                        <input type="text" name="country" placeholder="Select a country" className="countryInput"></input>
                        <p className="devicesTitle">How many devices?</p>
                        <input type="number" name="devices" className="devicesInput"></input>
                        <p className="contactPrefTitle">Contact preference</p>
                        <input type="button" name="bookmeeting" value="Book a meeting now" className="meetingInput"></input>
                        <input type="button" name="callme" value="Call me" className="callInput"></input>
                        {/* <p className="newsletterTitle">May we contact you by email with additional information, news, and product updates?</p>
                        <input type="checkbox" name="yes" value="Yes" className="yesCheckInput"></input>
                        <input type="checkbox" name="no" className="noCheckInput"></input> */}
                    <input type="submit" value="Submit Request" className='signupformbtn' ></input>

                </form>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Pricing;
