import React from 'react';

import banner7 from '../../images/banner-7.jpg';
import banner91 from '../../images/91.png';
import banner92 from '../../images/92.png';
import banner1_1 from '../../images/Hero_Banner_char.svg';

const Banner = () => (
  <div className="banner-style-nine-area bg-cover" style={{ backgroundImage: `url(${banner7})` }}>
        <div className="container">
            <div className="banner-style-nine-items">
                <div className="row align-items-center">
                    <div className="col-lg-7 pr-60 pr-md-15 pr-xs-15">
                        <div className="info">
                            <h4><img src={banner91} alt="Image Not Found"/> Discover 200+ Leading Universities</h4>
                            <h2>Where <strong>Talent</strong> Meets Direction</h2>
                            <p>
                                Get expert-led career guidance to choose the right course, college, and study destination with confidence.
                            </p>
                            <a className="btn btn-md btn-gradient animation" href="/contact">Book Free Counselling</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="thumb">
                            <img src={banner1_1} alt="Image Not Found"/>
                            <img src={banner92} alt="Image Not Found"/>
                            <div className="card-style-seven">
                                <h2>4.9</h2>
                                <div className="content">
                                    <div className="icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <h4>Student Verified Rating</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;
