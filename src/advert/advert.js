import React from 'react'
import './advert.css'
const Advert = () => {
    return (
   <div className="homepage2">
       <div className="homepage2-inner">
            <div className='homepage-left2'>
                <p className="headline2">Any device, anywhere.</p>
                <p className="description2">
                Seamlessly integrate multiple device types and platforms into your 1:1 deployment. From Chromebooks and Apple devices to Windows and BYOD, SteinbergSecurity's suite of tools can help keep your students safe on any device.
                </p>
            </div>

            <div className='homepage-right2' >
                <img src="images/devices.png" className="homepageImage2"></img>
            </div>
            <div className='homepage-left2-mobile'>
                <p className="headline2">Any device, anywhere.</p>
                <p className="description2">
                Seamlessly integrate multiple device types and platforms into your 1:1 deployment. From Chromebooks and Apple devices to Windows and BYOD, SteinbergSecurity's suite of tools can help keep your students safe on any device.
                </p>            
            </div>
            </div>

    </div>
    )
}

export default Advert;
