import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './affiliations.css'
const Affiliations = () => {
    return (

        <div className="affiliation-container">
            <p className='affiliationsTitle'>AS FEATURED IN</p>
            <div className="affiliation-inner">
            <li><img src="images/cbs.png" className="cbs" alt="cbs"></img></li>
            <li><img src="images/goldman.png" className="goldman" alt="goldman"></img></li>
            <li><img src="images/forbes.png" className="forbes" alt="forbes"></img></li>

            <li><img src="images/newYorkTimes.png" className="newYorkTimes" alt="new york times"></img></li>
            <li><img src="images/google2.png" className="google" alt="google "></img></li>
            <li><img src="images/npr.png" className="npr" alt="npr"></img></li>
            </div>
           <div className="affiliation-inner-mobile">
               <div>
                    <li><LazyLoadImage src="images/cbs.png" className="cbs"/></li>
                    <li><LazyLoadImage src="images/newYorkTimes.png" className="newYorkTimes"/></li>

                    <li><img src="images/forbes.png" className="forbes" alt="forbes"></img></li>
                </div>
                <div>
                    <li><LazyLoadImage src="images/goldman.png" className="goldman"/></li>

                    <li><LazyLoadImage src="images/google2.png" className="google"/></li>
                    <li><LazyLoadImage src="images/npr.png" className="npr"/></li>
                </div>
            </div>
        </div>
    )
}

export default Affiliations;
