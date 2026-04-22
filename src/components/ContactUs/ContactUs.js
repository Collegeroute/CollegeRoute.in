import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactImage from '../../images/88.png';

/**
 * ContactUs Form Component
 * Handles contact form submission using Formspree integration (xgoryyaw)
 */
const ContactUs = () => {
  const [state, handleSubmit] = useForm('xgoryyaw');

  React.useEffect(() => {
    console.log('Form state:', state);
  }, [state]);

  if (state.succeeded) {
    return (
      <div className="ContactUs">
        <div className="contact-style-one-area overflow-hidden default-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="contact-stye-one col-lg-10 offset-lg-1">
                <div className="contact-form-style-one">
                  <div className="alert-notification">
                    <div id="contact_success" className="alert-msg alert-success">
                      Thank you! Your message has been sent successfully.
                    </div>
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
    <div className="ContactUs">
      <div className="contact-style-one-area overflow-hidden default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="contact-stye-one col-lg-10 offset-lg-1">
              <div className="contact-form-style-one">
                <h2 className="heading">Send us a message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="number"
                          name="number"
                          placeholder="Phone"
                          type="text"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="number"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="contact_message"
                          name="message"
                          placeholder="How can we help you?*"
                          required
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>
                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="alert alert-danger">
                          <p>Please correct the errors above.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="contact_submit" disabled={state.submitting}>
                        <i className="fa fa-paper-plane"></i> {state.submitting ? 'Sending...' : 'Get in Touch'}
                      </button>
                    </div>
                  </div>
                </form>
                <img src={contactImage} alt="Contact decoration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
