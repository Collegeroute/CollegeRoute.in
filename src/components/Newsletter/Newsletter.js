import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Background image
const BACKGROUND_IMAGE = require('../../images/banner-8.jpg');

// Shape images
const SHAPE_IMAGES = [
  require('../../images/9.png'),
  require('../../images/48.png')
];

// Newsletter benefits
const NEWSLETTER_BENEFITS = [
  'Easy to Access',
  'No Credit card',
  '3000+ students onboard with us'
];

// Main Newsletter component (Formspree integrated)
const Newsletter = () => {
  const [state, handleSubmit] = useForm('xyklnegk');

  React.useEffect(() => {
    console.log('Form state:', state);
  }, [state]);

  if (state.succeeded) {
    return (
      <div className="Newsletter">
        <div className="newsletter-area default-padding-bottom bg-gray-gradient-secondary">
          <div className="container">
            <div 
              className="newsletter-style-one-items bg-theme text-center bg-cover" 
              style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
            >
              <div className="shape">
                {SHAPE_IMAGES.map((image, index) => (
                  <img key={index} src={image} alt="Newsletter decoration" />
                ))}
              </div>
              
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <h2 className="title split-text">Subscribe to our newsletter, We don't make any spam.</h2>
                  <div className="alert-notification">
                    <div className="alert-msg alert-success">Thanks for joining!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Newsletter">
      <div className="newsletter-area default-padding-bottom bg-gray-gradient-secondary">
        <div className="container">
          <div 
            className="newsletter-style-one-items bg-theme text-center bg-cover" 
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
          >
            <div className="shape">
              {SHAPE_IMAGES.map((image, index) => (
                <img key={index} src={image} alt="Newsletter decoration" />
              ))}
            </div>
            
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <h2 className="title split-text">Subscribe to our newsletter, We don't make any spam.</h2>
                
                <ul className="list-check">
                  {NEWSLETTER_BENEFITS.map((benefit, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <form className="fs-form" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="form-control fs-input" 
                    name="email"
                    id="newsletter-email"
                    required
                  />
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

                  <button className="fs-button" type="submit" disabled={state.submitting}>
                    <i className="fa fa-paper-plane"></i> {state.submitting ? 'Sending...' : 'Subscribe'}
                  </button>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
