import React from 'react'
import './signin.css'
import Footer from '../footer/footer';

import {Link}  from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Signin = () => {

AOS.init();

    return (
        <div>
        <div className="signin-container" >
            <div className="signin-inner" data-aos="zoom-in">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><p className="companyNameSignIn"><p className="companyName">SteinbergSecurity</p></p></Link>
                <p className='loginTitle'>Log in to your account</p>
                <form action="/action_page.php" className="loginForm">
                    <input type="email" placeholder="Email" className="emailInput"></input><br></br>
                    <input type="password" placeholder="Password" className="passwordInput"></input><br></br>
                    <input type="submit" value="Login" className='loginBtnForm' ></input>
                </form>
               
                <p className="or"> or</p>
                <div className="otherLogins">
                    <li>
                        <img src="images/google.jpg" className="googleIcon"></img>
                        <input type="submit" value="Login with Google" className='loginBtnGoogle'></input>
                    </li>
                    <li>
                        <img src="images/clever.png" className="cleverIcon"></img>
                        <input type="submit" value="Login with Clever" className='loginBtnClever'></input>
                    </li>
                    <li>
                        <img src="images/classLink.png" className="classLinkIcon"></img>                        
                        <input type="submit" value="Login with Class Link" className='loginBtnClassLink'></input>
                    </li>
                </div>
                <div className="support">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/start-free-trial" onClick={()=>{window.scrollTo(0, 0)}}><p className="newAcc">Need an account?</p></Link>
                    <p className="forgotPass">Forgot Password?</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signin;
