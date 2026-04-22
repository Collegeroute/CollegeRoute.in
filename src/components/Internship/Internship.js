import React from 'react';

// Certificate/Program data
const PROGRAMS = [
  {
    id: 1,
    image: require('../../images/15.jpg'),
    title: 'Internship Certificate',
    count: 'Total Awarded 45',
    buttonText: 'Apply Now',
    link: 'course-single.html'
  }
];

// Certificate carousel item component
const CertificateItem = ({ program }) => (
  <div className="swiper-slide">
    <div className="certificate-items">
      <div className="thumb">
        <img src={program.image} alt={program.title} />
      </div>
      <div className="info">
        <h4>{program.title}</h4>
        <span>{program.count}</span>
        <a className="btn circle btn-theme animation" href={program.link}>
          {program.buttonText}
        </a>
      </div>
    </div>
  </div>
);

// Main Internship component
const Internship = () => (
  <div id="internship" className="Internship">
    <div className="certificate-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="certificate-info default-padding">
              <h4 className="sub-title">Work With CollegeRoute</h4>
              <h2 className="title split-text">Join Our Student Internship Program.</h2>
              <p className="wow fadeInUp" data-wow-delay="200ms">
                This internship opportunity allows you to support students in career awareness while gaining real-world exposure in the education and career guidance space.

                As part of this internship, you will:
                <ul className="list-style-one">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Assist in providing career guidance and advice to students.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Support students in understanding career and college options.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Assist in outreach and awareness initiatives.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Develop communication and leadership skills.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Gain hands-on experience working with an education platform.
                  </li>
                </ul>
              </p>
              <div className="cartifita-style-one-items wow fadeInUp mt-40" data-wow-delay="400ms">
                <div className="certificate-carousel swiper">
                  <div className="swiper-wrapper">
                    {PROGRAMS.map(program => (
                      <CertificateItem key={program.id} program={program} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-5">
            <div className="certificate-thumb wow fadeInUp">
              <img src={require('../../images/6_1.png')} alt="Certificate thumbnail" />
              <img src={require('../../images/37.png')} alt="Certificate badge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Internship;
