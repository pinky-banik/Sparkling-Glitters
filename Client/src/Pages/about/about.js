import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './about.css';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
<div class="aboutus-section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    {/* {=======* About Us div * */}
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p >Everybody needs a little extra sparkle in their lives. And here we just got thing for you. Sparkle up your day or night with our extensive array of fairy lights for all settings and occasions, whether you just want that year-long Christmas feel or you want to add an exciting touch to your home decor, we have just the fairy light for you. we believe that shopping for decorative lights should be just as magical as switching them on. And our beautiful lights can help you to do this by lifting your spirits and making any space a place that you will want to spend more time in.</p>
                        
                        <a class="aboutus-more" href="/service">read more</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""></img>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Customer satisfaction our first priority. Maintaining a positive, empathetic, and professional attitude toward customers at all times.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>We ensure the best services to our customer. Responding promptly to customer inquiries.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>We also provide great suppot, Ensure customer satisfaction and provide professional customer support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default About;