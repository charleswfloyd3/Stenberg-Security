import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import './signup.css'
import './test.css'

const Signup = () => {
    return (
        <div>
          <Navbar />
        <div className="signup-container">
            <div className="signup-inner">
                <div className="signup-left">
                    <p className="signupTitle">Try StenbergSecurity for free</p>
                    <p className="signupDescrip">
                        With a suite that includes multi-OS device filtering and monitoring, backend encrytopn, and phising prevention, StenbergSecurity has everything you need to support a successful  technology program.
                    </p>
                    <img src="images/stack.jpg" className="signupImage"></img>
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
                        <input type="text" name="personProtected" placeholder="" className="jobInput"></input>
                        <p className="phoneNumTitle">Phone number</p>
                        <input type="text" name="number" className="phoneNumInput"></input>
                        <p className="productTitle">Which product are you primarily interested in?</p>
                        <input type="text" name="product" className="productInput"></input>
                        <p className="countryTitle">Country</p>
                        <input type="text" name="country" placeholder="Enter a country" className="countryInput"></input>
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
        <div className="testimonials-container">
            <div className="testimonials-inner">
                <div className="test1">
                    <p className="testimonial">"The real-time feedback of the product and the empowerment of employees to productively use technology has produced excellent results."</p>
                    <div className="testProfileBox">
                        <img className="testProfile" src="images/dustin.jpg"></img>
                        <div className="testInfo">
                            <p className="testName">Dustin Harden</p>
                            <p className="testPosition">Executive Director of Technology<br></br>Humble ISD</p>
                        </div>
                    </div>
                </div>
                <div className="test2">
                   <p className="testimonial">"In today's digital age, it's vital to have a tool that provides insights into our students' online behavior. The Beacon alerts we have received have enabled us to find those children in need of extra attention and counseling which has helped us, and helped the students and their families. We can't afford not to take care of these kids."</p>
                    <div className="testProfileBox">
                        <img className="testProfile" src="images/carl.jpg"></img>
                        <div className="testInfo">
                            <p className="testName">Carl Hoffman</p>
                            <p className="testPosition">Chief Technology Officer<br></br>IBM</p>
                        </div>
                    </div>
                </div>
                <div className="test3">
                   <p className="testimonial">"SteinbergSecurity allowed us to open up the Internet for our students so they may explore it, learn from it, and most importantly, build smart and practical habits when it comes to using it.
                    "</p>
                    <div className="testProfileBox">
                        <img className="testProfile" src="images/jay.jpg"></img>
                        <div className="testInfo">
                            <p className="testName">Dustin Harden</p>
                            <p className="testPosition">Executive Director of Technology<br></br>Humble ISD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Signup;
