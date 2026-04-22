import React from 'react';
import Image from '../../images/14.jpg';
import Image2 from '../../images/45.png';

const About = () => (
  <div className="about-style-three-area overflow-hidden default-padding">
        <div className="container">
            <div className="about-style-three-items wow fadeInUp" data-wow-delay="200ms">
                <div className="row align-center">
                    <div className="col-lg-6">
                        <div className="about-style-three-thumb">
                            <img src={Image} alt="Image Not Found"/>
                            <img src={Image2} alt="Image Not Found"/>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
                        <div className="about-style-three-info">
                            <h2 className="title split-text">Our commitment to expert-led guidance.</h2>
                            
                            <p>
                                Career decisions today demand clarity, precision, and informed mentorship. Our expert counsellors guide students through every step — from understanding strengths and aspirations to selecting the right course, college, and country. Each recommendation is personalized, data-driven, and aligned with long-term academic and career success, ensuring students make confident decisions that shape their future.
                            </p>
                            <div className="fact-style-two">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="280" data-speed="2000">500</div>
                                        <div className="operator">+</div>
                                    </div>
                                    <h4>Guided Students</h4>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="200" data-speed="2000">200</div>
                                        <div className="operator">+</div>
                                    </div>
                                    <h4>College Connections</h4>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="200" data-speed="2000">50</div>
                                        <div className="operator">+</div>
                                    </div>
                                    <h4>Study Destinations</h4>
                                </div>
                            </div>
                            <a className="btn btn-md btn-gradient animation" href="/contact">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
