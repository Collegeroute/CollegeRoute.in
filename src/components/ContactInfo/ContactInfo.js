import React from 'react';

import contactNumImage from '../../images/168.png';
import contactLocImage from '../../images/170.png';
import contactEmailImage from '../../images/169.png';

const ContactInfo = () => (
    <div class="contact-info-area overflow-hidden default-padding-bottom pt-20 mt--20">
        <div class="container">
            <div class="row">
                <div class="contact-stye-one col-lg-10 offset-lg-1">
                    <div class="contact-style-one-info">
                        <div class="heading text-center">
                            <h4 class="sub-title">Have Questions?</h4>
                            <h2 class="title">Contact Information</h2>
                        </div>
                        <div class="contact-info-items">
                            <div class="item-single wow fadeInUp">
                                <div class="icon">
                                    <img src={contactNumImage} alt="Contact Number" />
                                </div>
                                <div class="content">
                                    <h4>Contact Number</h4>
                                    <ul>
                                        <li>
                                            <a href="tel:+917871431357">+91 78714 31357</a>
                                        </li>
                                        <li>
                                            <a href="tel:+919150250110">+91 91502 50110</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="item-single wow fadeInUp" data-wow-delay="300ms">
                                <div class="icon">
                                    <img src={contactLocImage} alt="Our Location" /> 
                                </div>
                                <div class="info">
                                    <h4>Our Location</h4>
                                    <p>
                                        <strong>
                                            Chennai • Coimbatore • Namakkal
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div class="item-single wow fadeInUp" data-wow-delay="500ms">
                                <div class="icon">
                                    <img src={contactEmailImage} alt="Official Email" />
                                </div>
                                <div class="info">
                                    <h4>Official Email</h4>
                                    <ul>
                                        <li>
                                            <a href="mailto:info@collegeroute.in">info@collegeroute.in</a>
                                        </li>
                                        <li>
                                            <a href="mailto:support@collegeroute.in">support@collegeroute.in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default ContactInfo;
