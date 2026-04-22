import React from 'react';

import eventCategory1 from '../../images/eventCategory/eventCategory1.png';
import eventCategory2 from '../../images/eventCategory/eventCategory2.png';
import eventCategory3 from '../../images/eventCategory/eventCategory3.png';
import eventCategory4 from '../../images/eventCategory/eventCategory4.png';

import eventCover1 from '../../images/eventCovers/eventCover1.png';
import eventCover2 from '../../images/eventCovers/eventCover2.png';
import eventCover3 from '../../images/eventCovers/eventCover3.png';
import eventCover4 from '../../images/eventCovers/eventCover4.png';
import eventCover5 from '../../images/eventCovers/eventCover5.png';
import eventCover6 from '../../images/eventCovers/eventCover6.png';
import eventCover7 from '../../images/eventCovers/eventCover7.png';
import eventCover8 from '../../images/eventCovers/eventCover8.png';
import eventCover9 from '../../images/eventCovers/eventCover9.png';
import eventCover10 from '../../images/eventCovers/eventCover10.png';
import eventCover11 from '../../images/eventCovers/eventCover11.png';
import eventCover12 from '../../images/eventCovers/eventCover12.png';

// Event category data
const EVENT_CATEGORIES = [
  {
    id: 1,
    title: 'Career & Course Counselling',
    count: '3 Events',
    image: eventCategory1
  },
  {
    id: 2,
    title: 'Entrance Exam & Scholarship',
    count: '3 Events',
    image: eventCategory2
  },
  {
    id: 3,
    title: 'College Admission Guidance',
    count: '4 Events',
    image: eventCategory3
  },
  {
    id: 4,
    title: 'Application & SOP Guidance',
    count: '2 Events',
    image: eventCategory4
  }
];

// Course data
const COURSES = [
  [
    {
      id: 1,
      image: eventCover1,
      rating: 4.8,
      instructor: 'Aleesha Brown',
      role: 'WordPress Developer',
      instructorImage: require('../../images/m2.jpg'),
      title: 'Free 30-Minute Personalized Career Guidance Session',
      lessons: 78,
      students: 120,
      originalPrice: '₹200.00',
      price: 'Free'
    },
    {
      id: 2,
      image: eventCover2,
      rating: 5.0,
      instructor: 'Kevin Martin',
      role: 'Graphics Designer',
      instructorImage: require('../../images/m1.jpg'),
      title: 'In-Depth Career Counselling Based on Student Profile & Career Goals',
      lessons: 54,
      students: 340,
      originalPrice: '₹53.00',
      price: '₹28.00'
    },
    {
      id: 3,
      image: eventCover3,
      rating: 4.9,
      instructor: 'Sarah Albert',
      role: 'Marketing Expert',
      instructorImage: require('../../images/m3.jpg'),
      title: 'Strategic Course & College Selection Across Top Institutions in India',
      lessons: 48,
      students: 650,
      originalPrice: '₹36.00',
      price: '₹20.00'
    }
  ],
  [
    {
      id: 4,
      image: eventCover4,
      rating: 4.8,
      instructor: 'Aleesha Brown',
      role: 'WordPress Developer',
      instructorImage: require('../../images/m3.jpg'),
      title: 'Entrance Exam Guidance ',
      lessons: 78,
      students: 458,
      originalPrice: '₹36.00',
      price: '₹20.00'
    },
    {
      id: 5,
      image: eventCover5,
      rating: 4.7,
      instructor: 'Kevin Martin',
      role: 'Graphics Designer',
      instructorImage: require('../../images/m1.jpg'),
      title: 'Scholarship Opportunities for Students',
      lessons: 108,
      students: 457,
      originalPrice: '₹42.00',
      price: '₹28.00'
    },
    {
      id: 6,
      image: eventCover6,
      rating: 4.7,
      instructor: 'Sarah Albert',
      role: 'Marketing Expert',
      instructorImage: require('../../images/m3.jpg'),
      title: 'University Entrance Exam Preparation Guidance',
      lessons: 45,
      students: 875,
      originalPrice: '₹46.00',
      price: '₹34.00'
    }
  ],
  [
    {
      id: 7,
      image: eventCover7,
      rating: 5.0,
      instructor: 'Aleesha Brown',
      role: 'WordPress Developer',
      instructorImage: require('../../images/m1.jpg'),
      title: 'Understanding the Admission Process',
      lessons: 78,
      students: 465,
      originalPrice: '₹28.00',
      price: '₹16.00'
    },
    {
      id: 8,
      image: eventCover8,
      rating: 5.0,
      instructor: 'Kevin Martin',
      role: 'Graphics Designer',
      instructorImage: require('../../images/m2.jpg'),
      title: 'Eligibility & Application Process Guidance',
      lessons: 108,
      students: 457,
      originalPrice: '₹28.00',
      price: '₹25.00'
    },
    {
      id: 9,
      image: eventCover9,
      rating: 5.0,
      instructor: 'Sarah Albert',
      role: 'Marketing Expert',
      instructorImage: require('../../images/m3.jpg'),
      title: 'Fee Structure & Admission Cost Planning ',
      lessons: 45,
      students: 260,
      originalPrice: '₹43.00',
      price: '₹35.00'
    },
    {
      id: 10,
      image: eventCover10,
      rating: 5.0,
      instructor: 'Aleesha Brown',
      role: 'WordPress Developer',
      instructorImage: require('../../images/m2.jpg'),
      title: 'Management Quota & Direct Admission Guidance',
      lessons: 78,
      students: 246,
      originalPrice: '₹36.00',
      price: '₹20.00'
    }
  ],
  [
    {
      id: 11,
      image: eventCover11,
      rating: 5.0,
      instructor: 'Aleesha Brown',
      role: 'WordPress Developer',
      instructorImage: require('../../images/m2.jpg'),
      title: 'Understanding the Application Process',
      lessons: 78,
      students: 246,
      originalPrice: '₹36.00',
      price: '₹20.00'
    },
    {
      id: 12,
      image: eventCover12,
      rating: 5.0,
      instructor: 'Sarah Albert',
      role: 'Marketing Expert',
      instructorImage: require('../../images/m1.jpg'),
      title: 'Document Preparation & Submission Guidance',
      lessons: 108,
      students: 457,
      originalPrice: '₹45.00',
      price: '₹36.00'
    }
  ]
];

// Event category card component
const EventCategory = ({ category }) => (
  <div className="swiper-slide">
    <div className="course-bullet-item">
      <div className="icon">
        <img src={category.image} alt={category.title} />
      </div>
      <div className="info">
        <h4>{category.title}</h4>
        <span>{category.count}</span>
      </div>
    </div>
  </div>
);

// Course card component
const CourseCard = ({ course }) => (
  <div className="swiper-slide">
    <div className="course-style-one-item hover-less style-two">
      <div className="thumb">
        <img src={course.image} alt={course.title} />
      </div>
      
      <div className="info">
    
        <h4><a href="course-single.html">{course.title}</a></h4>
        <div className="course-meta">
          {/* <ul>
            <li>
              <i className="fas fa-file-alt"></i> {course.lessons} Lessons
            </li>
            <li>
              <i className="fas fa-user"></i> {course.students} Students
            </li>
          </ul> */}
        </div>
      </div>
      <div className="course-bottom-meta">
        {/* <h2 className="price"><del>{course.originalPrice}</del> {course.price}</h2> */}
        <a href={`https://wa.me/917871431357?text=I'm interested in booking a session for ${course.title}`} target='a_blank'>
          <i className="fas fa-calendar-plus"></i> Book a Session
        </a>
      </div>
    </div>
  </div>
);

// Inner carousel section
const CarouselSection = ({ courses }) => (
  <div className="swiper-slide">
    <div className="row">
      <div className="course-inner-carousel swiper">
        <div className="swiper-wrapper">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Main Events component
const Events = () => (
  <div id="events" className="Events">
    <div className="course-style-two-area default-padding bottom-less bg-gray-gradient-secondary overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Events</h4>
              <h2 className="title">Our Upcoming Events</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-style-one-bullet swiper">
              <div className="swiper-wrapper">
                {EVENT_CATEGORIES.map(category => (
                  <EventCategory key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="course-style-one-carousel swiper">
          <div className="swiper-wrapper">
            {COURSES.map((courseGroup, index) => (
              <CarouselSection key={index} courses={courseGroup} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Events;
