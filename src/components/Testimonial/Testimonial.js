import React from 'react';
import QUOTE_ICON from '../../images/quote.png';
import avatarBoy from '../../images/avatars/avatar-boy.svg';
import avatarGirl from '../../images/avatars/avatar-girl.svg';
import avatarMan from '../../images/avatars/avatar-man.svg';
import avatarWoman from '../../images/avatars/avatar-woman.svg';

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    title: 'Excellent Guidance',
    content: 'I contacted CollegeRoute for career counselling after 12th when I was confused about my career path. Harrish helped me understand my strengths and interests clearly. The guidance helped me select the right course and college with confidence.',
    studentImage: avatarBoy,
    studentName: 'Vigneshwaran S',
    course: 'Student',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Great Support',
    content: 'The CollegeRoute team supported me with college admission guidance in Chennai for Arts and Science courses. They explained course options and college reputation clearly. Their counselling helped me choose a college suited to my academic background and career goals.',
    studentImage: avatarGirl,
    studentName: 'Anitha M',
    course: 'Student',
    rating: 5
  },
  {
    id: 3,
    title: 'Transparent Process',
    content: 'I approached CollegeRoute for direct admission in a private college. The team explained the management quota admission process transparently and helped me secure admission in a BBA program. Their guidance was clear and focused on what was best for my future.',
    studentImage: avatarBoy,
    studentName: 'Pradeep Kumar',
    course: 'Student',
    rating: 4.5
  },
  {
    id: 4,
    title: 'Informed Decision-Making',
    content: 'We sought career counselling from CollegeRoute to help our daughter choose the right commerce course after 12th. Harrish and the team patiently explained course options and college choices. Their guidance helped us make a confident and informed decision.',
    studentImage: avatarWoman,
    studentName: 'Jayanthi Raman',
    course: 'Parent',
    rating: 5
  },
  {
    id: 5,
    title: 'Structured Counselling',
    content: 'We approached CollegeRoute for university admission counselling for our son interested in design and creative fields. The team explained eligibility, college options, and career scope clearly. Their structured counselling helped us shortlist the right university without confusion.',
    studentImage: avatarMan,
    studentName: 'Srinivasan K',
    course: 'Parent',
    rating: 5
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="ratings">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => (
  <div className="swiper-slide">
    <div className="testimonial-style-two">
      <div className="top-info">
        <div className="icon">
          <img src={QUOTE_ICON} alt="Quote icon" />
        </div>
        <h5>{testimonial.title}</h5>
      </div>
      <div className="content">
        <p>{testimonial.content}</p>
        <div className="bottom-info">
          <div className="provider">
            <div className="thumb">
              <img src={testimonial.studentImage} alt={testimonial.studentName} />
            </div>
            <div className="info">
              <h4>{testimonial.studentName}</h4>
              <span>{testimonial.course}</span>
            </div>
          </div>
          <div className="provider">
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Testimonial component
const Testimonial = () => (
  <div id="testimonial" className="Testimonial">
    <div className="testimonial-style-two-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Student Feedback</h4>
              <h2 className="title split-text">Best review from our successful student</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-style-two-carousel swiper">
              <div className="swiper-wrapper">
                {TESTIMONIALS.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
