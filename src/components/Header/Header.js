import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import collegeLogo from '../../images/CollegeRouteLogo.svg';
import collegeLogoLight from '../../images/CollegeRouteLogo-light.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faArrowRightLong, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useForm, ValidationError } from '@formspree/react';

const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [state, handleSubmit] = useForm('xyklnegk');

  React.useEffect(() => {
    console.log('Newsletter form state:', state);
  }, [state]);
  const whatsappMessage = encodeURIComponent(
        "Hello! I'm interested in learning more about your career counseling services. Could you please help me explore university options and guidance for my future? Thank you!"
    );
    const whatsappLink = `https://wa.me/917871431357?text=${whatsappMessage}`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/universities?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput('');
    }
  };
  return (
    <header>
      {/* Start Navigation */}
      <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs dark navbar-fixed no-background inc-topbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Start Header Navigation */}
          <div className="item-flex">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <Link className="navbar-brand" to="/">
                <img src={collegeLogo} className="logo" alt="College Route Logo" />
              </Link>
            </div>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search universities..."
                className="form-control"
                name="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
          {/* End Header Navigation */}

          <div className="nav-item-box d-flex justify-content-between align-items-center">
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <img src={collegeLogo} alt="College Route Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
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

            <div className="attr-right">
              {/* Start Atribute Navigation */}
              <div className="attr-nav">
                <ul>
                  <li className="side-menu">
                    <a href="#">
                      <div className="menu-icon">
                        <span className="bar-1"></span>
                        <span className="bar-2"></span>
                        <span className="bar-3"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Atribute Navigation */}
            </div>
          </div>

          {/* Start Side Menu */}
          <div className="side">
            <a href="#" className="close-side">
              <FontAwesomeIcon icon={faTimes} />
            </a>
            <div className="widget">
              <div className="logo">
                <img src={collegeLogoLight} alt="College Route Light Logo" />
              </div>
              <p>
                Personalized admission counselling for students seeking the right
                course and university. We guide assessment, university
                shortlisting, applications, and enrolment, enabling successful
                admissions across reputed institutions in India and leading study
                abroad destinations.
              </p>
            </div>
            <div className="widget address">
              <div>
                <ul>
                  <li>
                    <div className="content">
                      <p>Contact</p>
                      <a href="tel:+917871431357">+(91)-78714-31357</a>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <p>Email</p>
                      <a href="mailto:info@collegeroute.in">
                        info@collegeroute.in
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <p>Locations</p>
                      <strong>
                        Chennai • Coimbatore • Trichy • Salem • Namakkal
                      </strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget newsletter">
              <h4 className="title">Get Subscribed!</h4>
              {state.succeeded ? (
                <div className="alert-notification">
                  <div className="alert-msg alert-success">Thanks for joining!</div>
                </div>
              ) : (
                <form className="fs-form" onSubmit={handleSubmit}>
                  <div className="input-group stylish-input-group">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="form-control fs-input"
                      name="email"
                      id="header-email"
                      required
                    />
                    <span className="input-group-addon">
                      <button className="fs-button" type="submit" disabled={state.submitting}>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                      </button>
                    </span>
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="alert alert-danger">
                          <p>Please correct the errors above.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
            <div className="widget social">
              <ul className="link">
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
          {/* End Side Menu */}
        </div>
        {/* Overlay screen for menu */}
        <div className="overlay-screen"></div>
        {/* End Overlay screen for menu */}
      </nav>
      {/* End Navigation */}
    </header>
  );
};

export default Header;
