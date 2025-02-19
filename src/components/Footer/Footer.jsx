import React from "react";
import './Footer.css';
import { assets } from "../../assets/assets";

const Footer = () => {
    return(
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=""/>
                    <p>Food is the essence of life, providing nourishment and delight in equal measure. It bridges cultures, evokes memories, and brings people together in shared experiences of taste and aroma.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+21-3-43-4498</li>
                        <li>venkey@123.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>

        </div>
    )
}

export default Footer