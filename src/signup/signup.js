import React from 'react'
import './signup.css'
const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-inner">
                <div className="signup-left">
                    <p className="signupTitle">Try SteinbergSecurity for free</p>
                </div>
                <div className="signup-right">
                    <form action="/action_page.php" className="signupForm">
                        <p className="firstnameTitle">First name</p>
                        <input type="text" name="fname" ></input>
                        <p className="lastnameTitle">Last name</p>
                        <input type="text" name="lname"></input>
                        <p className="emailTitleSignup">Email</p>
                        <input type="email" name="email"></input>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
