import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import blog1 from '../images/blogcover1.png';
import blog2 from '../images/blogcover2.png';
import blog3 from '../images/blogcover3.png';

const imageMap = {
    'blogcover1.png': blog1,
    'blogcover2.png': blog2,
    'blogcover3.png': blog3,
};

const BlogSingle = () => {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug) || blogs[0];

    return (
        <section className="blog-single-page">
            <div className="breadcrumb-area text-center bg-gray-gradient-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>{blog.title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/"><i className="fas fa-home"></i> Home</Link>
                                    </li>
                                    <li className="separator">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </li>
                                    <li>
                                        <Link to="#blog">Blog</Link>
                                    </li>
                                    <li className="separator">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </li>
                                    <li className="active">{blog.title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                <div className="item">
                                    <div className="thumb">
                                        <img src={imageMap[blog.image]} alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <div className="meta">
                                            <ul>
                                                <li>
                                                    <a href="#"><i className="far fa-calendar-alt"></i> {blog.date}</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="far fa-user-circle"></i> {blog.author}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2 className="title">{blog.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;
