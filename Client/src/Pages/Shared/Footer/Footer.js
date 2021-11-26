import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
           <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="//">Decorative Lights</a></li>
                            <li><a href="//">Party Lights</a></li>
                            <li><a href="//">Crystmas Lights</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="//">About us</a></li>
                            <li><a href="//">Contact Us</a></li>
                            <li><a href="//">More</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Sparkling Glitters</h3>
                        <p>Our philosophy is to promote lamps in addition to being aesthetically beautiful. At Festive Lights, everything we do is about making our customers happy. Particularly when it comes to choice, availability, quality and price.</p>
                    </div>
                    <hr></hr>
                   <div className="row">
                   </div>
                        <div className="col-lg-6">
                            <h3 className="copyright">Sparkling Glitters © 2021</h3>
                    </div>
                   <div className="col-lg-6 item social">
                        <a href="//"><img src="https://i.ibb.co/8bpzYdq/facebook.png" alt="" /></a>
                        <a href="//"><img src="https://i.ibb.co/FmKG5tk/twitter.png" alt="" /></a>
                        <a href="//"><img src="https://i.ibb.co/RcXVVMH/instragram.png" alt="" /></a>
                        <a href="//"><img src="https://i.ibb.co/KNyPdTw/link.png" alt="" /></a>
                        
                        
                   </div>
                </div>
                
            </div>
        </footer>
    </div>
        </>
    );
};

export default Footer;