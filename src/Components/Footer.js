import React from 'react';
import { FaGooglePlusSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube, FaRegEnvelope, FaPhoneAlt, FaFax } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="50">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className='foot-anchor'>Home</a></li>
                            <li><a href="/about" className='foot-anchor'>About</a></li>
                            <li><a href="/menucomponent" className='foot-anchor'>Menu</a></li>
                            <li><a href="/contact" className='foot-anchor'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5" data-aos="fade-down" data-aos-duration="500" data-aos-delay="50">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <FaPhoneAlt />: +852 1234 5678<br />
                            <FaFax />: +852 8765 4321<br />
                            <FaRegEnvelope />: <a href="mailto:confusion@food.net" className='foot-anchor'>
                                confusion@food.net</a>
                        </address>
                    </div>
                    
                    <div className="col-12 col-sm-4 align-self-center" data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom" data-aos-duration="500" data-aos-easing="ease-in">
                        <div className="text-center"  >
                            <a href="http://google.com/+"><FaGooglePlusSquare color="#db4a39" size="30px" /></a>
                            <a href="http://www.facebook.com/profile.php?id="><FaFacebookSquare color="#3b5998 " size="30px" /></a>
                            <a href="http://www.linkedin.com/in/"><FaLinkedin color="#0e76a8" size="30px" /></a>
                            <a href="http://twitter.com/"><FaTwitterSquare color="skyblue" size="30px" /></a>
                            <a href="http://youtube.com"><FaYoutube color="red" size="30px" /></a>
                            <a href="mailto:"><FaRegEnvelope color="blue" size="30px" /></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;