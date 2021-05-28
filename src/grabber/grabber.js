import React from 'react'
import './grabber.css'
const Grabber = () => {
    return (
        <div className="grabber-container">
            <div className="grabber-inner">
                <h1 className="grabber-headline">Powerful Alone. Stronger Together.</h1>
                <p className="grabber-description">Unify your filtering, classroom management, and school mental health tools into a single suite.
                GoGuardian’s suite of tools helps you maximize the learning potential of your 1:1 school technology program.</p>
            </div>
            <div  className="content">
            <div className='content-outer'>
                <div className="grabber-left">
                    <img src="images/grabber.jpg" className="infoImg"></img>
                </div>
                <div className="grabber-right">
                    <div > 
                        <h1 className="content-title">Filtering &amp; Monitoring</h1>
                        <p className="content-descrip">Filter and monitor any device and any OS with K-12's most powerful content filter.</p>
                        <p className="learnmore">Learn More > </p>

                    </div>
                    <div>
                        <h1 className="content-title">Classroom Management</h1>
                        <p className="content-descrip">Eliminate distractions and connect with students by using K-12's leading classroom management software.</p>
                        <p className="learnmore">Learn More > </p>
                    
                    </div>
                    <div>
                        <h1 className="content-title">Student Safety</h1>
                        <p className="content-descrip">Identify students who are at risk of suicide or possible harm to other through threats, violence, and bullying.</p>
                        <p className="learnmore">Learn More > </p>
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Grabber;
