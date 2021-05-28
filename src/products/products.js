import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import './products.css'
import './part2.css'

const Products = () => {
    return (
        <div>
            <Navbar />
  <div className="products-page" data-aos="fade-down" data-aos-duration="600" >
        <div className="products-inner">
            <div className='products-left'>
                <p className="headline-products">The Suite</p>
                <p className="description-products">
                    Unify your filtering, classroom management, device management, and school mental health tools into a single suite. Our Suite bundles all of our products to support a simplified digital teaching environment for in-class and remote learning.
                </p>
                <div className="infoBtns-products">
                    <p className="infoBtn-product">Get more Info</p>
                    <p className="exploreBtn-product">Watch the Demo</p>
                </div>
                <div className="aff-products">
                    <img src='images/microPro.svg' className="microPro"></img>

                </div>
            </div>

            <div className='products-right' >
                <img src="images/beacon.jpg" className="homepageImage-products"></img>
            </div>

            <div className='products-left-mobile'>
                <p className="headline-mobile-products">The Suite</p>
                <p className="headline-mobile2-products">The Suite</p>

                <p className="description-mobile-products">
                    Protecting your computer is more important now than ever. Security breaches and financial scams have increased by over 70% since the start of the pandemic.
                    Don't be cheap and pay later. For the cost of  a cup of coffee a month, you'll be secure, guaranteed. Be smart and start saving now. 
                </p>
                <div className="infoBtns-mobile">
                    <p className="infoBtn-mobile">Get more Info</p>
                    <p className="exploreBtn-mobile">Watch the Demo</p>
                </div>
            </div>
        </div>
     </div>
            <Footer />

     </div>
    )
}

export default Products;
