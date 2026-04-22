import React from 'react';
import phone2 from '../../images/2.png';
import email3 from '../../images/3.png';
import flagImg from '../../images/flag.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HeaderTop = () => {
  const whatsappMessage = encodeURIComponent(
        "Hello! I'm interested in learning more about your career counseling services. Could you please help me explore university options and guidance for my future? Thank you!"
    );
    const whatsappLink = `https://wa.me/917871431357?text=${whatsappMessage}`;
  return (
    <div className="top-bar-area top-bar-style-one bg-dark text-light">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-7">
            <ul className="item-flex">
              <li>
                <a href="tel:+917871431357">
                  <img src={phone2} alt="Phone Icon" /> Phone: +91 78714 31357
                </a>
              </li>
              <li>
                <a href="mailto:info@collegeroute.in">
                  <img src={email3} alt="Email Icon" /> Email: info@collegeroute.in
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-5 text-end">
                    <div class="item-flex">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button">
                                <img src={flagImg} alt="Flag Icon" />
                                English
                            </button>
                        </div>
                        <div class="social">
                            <ul>
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
                </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
