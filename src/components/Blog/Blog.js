import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

// Blog posts data
const BLOG_POSTS = [
  {
    id: 1,
    image: require('../../images/blogcover1.png'),
    category: 'Universities',
    date: 'January 14, 2026',
    title: 'Top Universities & Colleges in Tamil Nadu (2026)',
    excerpt: 'Tamil Nadu is widely recognized as one of India\'s most reliable and student-friendly...',
    link: '/blog/top-universities-colleges-tamil-nadu',
    delay: '0ms'
  },
  {
    id: 2,
    image: require('../../images/blogcover2.png'),
    category: 'Courses',
    date: 'March 18, 2026',
    title: 'Top Courses After 12th with High Career Scope (2026)',
    excerpt: 'Choosing the right course after 12th is one of the most important decisions for students...',
    link: '/blog/top-courses-after-12th-high-career-scope',
    delay: '200ms'
  },
  {
    id: 3,
    image: require('../../images/blogcover3.png'),
    category: 'Admissions',
    date: 'April 14, 2026',
    title: 'Understanding Admission Cutoffs after 12th',
    excerpt: 'When students begin exploring college admissions after 12th, one of the most...',
    link: '/blog/understanding-admission-cutoffs-after-12th',
    delay: '400ms'
  }
];

// Blog post card component
const BlogPostCard = ({ post }) => (
  <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
    <div className="home-blog-style-two-item wow fadeInUp" data-wow-delay={post.delay}>
      <div className="thumb">
        <img src={post.image} alt={post.title} />
        <ul className="blog-meta">
          <li><a href="#">{post.category}</a></li>
          <li><i className="fas fa-calendar-alt"></i> {post.date}</li>
        </ul>
      </div>
      <div className="info">
        <h3 className="blog-title">
          <a href={post.link}>{post.title}</a>
        </h3>
        <p>{post.excerpt}</p>
        <a href={post.link} className="btn-read-more">Read More <i><FontAwesomeIcon icon={faArrowRightLong} /></i></a>
      </div>
    </div>
  </div>
);

// Main Blog component
const Blog = () => (
  <div id="blog" className="Blog">
    <div className="blog-area home-blog-style-two bg-gray-gradient-secondary default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Blog Insight</h4>
              <h2 className="title split-text">Stay Informed with Our Latest Articles</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {BLOG_POSTS.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
