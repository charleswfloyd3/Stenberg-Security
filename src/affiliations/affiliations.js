import React from 'react'
import './affiliations.css'
const Affiliations = () => {
    return (

        <div className="affiliation-container">
            <p className='affiliationsTitle'>AS FEATURED IN</p>
            <div className="affiliation-inner">
            <li><img src="images/cbs.png" className="cbs"></img></li>
            <li><img src="images/goldman.png" className="goldman"></img></li>
            <li><img src="images/forbes.png" className="forbes"></img></li>

            <li><img src="images/newYorkTimes.png" className="newYorkTimes"></img></li>
            <li><img src="images/google2.png" className="google"></img></li>
            <li><img src="images/npr.png" className="npr"></img></li>
            </div>
          
        </div>
    )
}

export default Affiliations;
