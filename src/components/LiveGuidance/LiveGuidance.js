import React from 'react';

// Guidance steps data
const GUIDANCE_STEPS = [
  {
    id: 1,
    step: '01',
    title: 'Career Assessment'
  },
  {
    id: 2,
    step: '02',
    title: 'Course Counselling'
  },
  {
    id: 3,
    step: '03',
    title: 'University Shortlisting'
  },
  {
    id: 4,
    step: '04',
    title: 'Admission Secured'
  }
];

// Mentor data
const MENTOR_INFO = {
  image: require('../../images/mentor.jpg'),
  name: 'Harrish K',
  studentsmentored: '300+',
  rating: 4.9,
  successRate: '100%',
  link: 'course-single.html'
};

// Background image
const BACKGROUND_IMAGE = require('../../images/93.png');
const COURSE_IMAGE = require('../../images/16.jpg');

// Step item component
const StepItem = ({ step }) => (
  <div className="step-style-one-item">
    <span>{step.step}</span>
    <h4>{step.title}</h4>
  </div>
);

// Main LiveGuidance component
const LiveGuidance = () => (
  <div className="LiveGuidance">
    <div className="live-course-area default-padding bg-theme" style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="site-heading text-light text-center">
              <h4 className="sub-title">Expert Guidance</h4>
              <h2 className="title split-text">Interactive LIVE and Admission-Focused Guidance</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="step-style-one-items">
              {GUIDANCE_STEPS.map(step => (
                <StepItem key={step.id} step={step} />
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="live-course-items">
              <img className="wow fadeInUp" src={COURSE_IMAGE} alt="Live guidance course" />
              <div className="live-instructor wow fadeInRight" data-wow-delay="300ms">
                <img src={MENTOR_INFO.image} alt={MENTOR_INFO.name} />
                <div className="info">
                  <h4><strong>Mentor: </strong> {MENTOR_INFO.name}</h4>
                  <ul>
                    <li><strong>Students mentored</strong> {MENTOR_INFO.studentsmentored}</li>
                    <li><strong>Average Rating</strong> <span><i className="fas fa-star"></i> {MENTOR_INFO.rating}</span></li>
                    <li><strong>Admission Success Rate</strong> {MENTOR_INFO.successRate}</li>
                  </ul>
                  <a href={MENTOR_INFO.link} className="btn-style-two mt-30">
                    <span>Book Now</span> <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LiveGuidance;
