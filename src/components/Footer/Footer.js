import React from 'react';
import { Link } from 'react-router-dom';
import logo2Light from '../../images/2-light.png';
import logoLight from '../../images/CollegeRouteLogo-light.svg';
import xIcon from '../../images/x.png';
import appIcon4 from '../../images/4.png';
import appIcon5 from '../../images/5.png';
import appIcon6 from '../../images/6.png';

const Footer = () => {
    const whatsappMessage = encodeURIComponent(
        "Hello! I'm interested in learning more about your career counseling services. Could you please help me explore university options and guidance for my future? Thank you!"
    );
    const whatsappLink = `https://wa.me/917871431357?text=${whatsappMessage}`;
    return (
    <div className="Footer">
        <footer className="bg-dark footer-style-one text-light">
            <div className="footer-shape-style-one">
                <img src={logo2Light} alt="Image Not Found" />
            </div>
            <div className="container">
                <div className="f-items default-padding">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                            <div className="f-item about">
                                <div className="footer-logo">
                                    <img src={logoLight} alt="Image Not Found" />
                                </div>
                                <p>
                                    Choose the Right Course.<br />Choose the Right College.<br /> Choose the Right Future.
                                </p>
                                <ul className="footer-social">
                                    <li>
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                            <i class="fab fa-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/collegeroute-in/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@CollegeRoute" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/collegeroute.in_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Pages</h4>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/universities">Universities</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Quick Link</h4>
                                <ul>
                                    <li>
                                        <a href="#/events">Events</a>
                                    </li>
                                    <li>
                                        <a href="#/internship">Internship</a>
                                    </li>
                                    <li>
                                        <a href="#/testimonial">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#/blog">Blogs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-item">
                            <div className="f-item newsletter">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="contact-list-two">
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="info">
                                            <h5><a href="tel:+917871431357">+(91)-78714-31357</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="info">
                                            <h5><a href="mailto:info@collegeroute.in">Info@collegeroute.in</a></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Footer Bottom */}
            <div className="footer-bottom style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>&copy; 2026 <a href="https://www.collegeroute.in/">CollegeRoute</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Bottom */}
        </footer>
    </div>
);
};

export default Footer;
