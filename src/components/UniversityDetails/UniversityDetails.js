import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import universitiesData from '../../data/universities.json';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './UniversityDetails.css';


// Load images from src/images folder
function importAll(r) {
    const images = {};
    r.keys().forEach((item) => {
        const filename = item.replace('./', '');
        const imported = r(item);
        images[filename] = imported && imported.default ? imported.default : imported;
    });
    return images;
}

const images = importAll(require.context('../../images/universities', false, /\.(png|jpe?g|webp|svg)$/));

const UniversityDetails = () => {
    const { slug } = useParams();

    const university = useMemo(() => {
        return universitiesData.find(uni => uni.id === slug);
    }, [slug]);

    const [activeTab, setActiveTab] = useState('tab_1');
    const [expandedCourses, setExpandedCourses] = useState(0); // Only one expanded at a time
    const [expandedFaqs, setExpandedFaqs] = useState(null); // Only one expanded at a time
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const toggleCourseAccordion = (index) => {
        // Toggle exclusive - if same index clicked, close it; otherwise open only that one
        setExpandedCourses(expandedCourses === index ? null : index);
    };

    const toggleFaqAccordion = (index) => {
        // Toggle exclusive - if same index clicked, close it; otherwise open only that one
        setExpandedFaqs(expandedFaqs === index ? null : index);
    };

    const handleVideoClick = (e) => {
        e.preventDefault();
        setIsVideoModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsVideoModalOpen(false);
    };

    const getYouTubeEmbedUrl = (url) => {
        if (!url) return '';
        // Extract video ID from various YouTube URL formats
        let videoId = '';
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtube.com/embed/')) {
            return url; // Already in embed format
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    useEffect(() => {
        // Re-initialize state when university changes
        setExpandedCourses(0);
        setExpandedFaqs(null);
        setIsVideoModalOpen(false);
    }, [university, slug]);

    if (!university) {
        return <div>University not found</div>;
    }

    const averageRating = university.reviews.length > 0 ? (university.reviews.reduce((sum, r) => sum + r.rating, 0) / university.reviews.length).toFixed(1) : 0;

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5;
        const stars = [];
        for (let i = 0; i < full; i++) stars.push(<i key={`s${i}`} className="fas fa-star"></i>);
        if (half) stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        while (stars.length < 5) stars.push(<i key={`e${stars.length}`} className="far fa-star"></i>);
        return stars;
    };

    const getImage = (filename) => {
        return images[filename] || images['image.png'] || '';
    };

    return (
    <>
            <Breadcrumb
                title="University Details"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Universities", href: "/universities" },
                    { label: university.name, isActive: true }
                ]} />
            <div className="UniversityDetails">
                <div className="course-detils-area default-padding">
                    <div className="container">
                        <div className="course-details-items">
                            <div className="row">
                                <div className="col-lg-8 pr-40 pr-md-15 pr-xs-15">
                                    <div className="course-details-left-info">

                                        <div className="course-single-meta">
                                            <div className="item author">
                                                <div className="thumb">
                                                    <a href="#"><img alt="Thumb" src={getImage(university.images[2])} /></a>
                                                </div>
                                                <div className="desc">
                                                    <h4>Location</h4>
                                                    <a href="#">{university.city}</a>
                                                </div>
                                            </div>
                                            <div className="item category">
                                                <h4>THE Ranking</h4>
                                                <a href="#">{university.theRanking}<sup>th</sup></a>
                                            </div>
                                            <div className="item rating">
                                                <h4>QS University Rating</h4>
                                                {renderStars(university.qsRating)}
                                                <span>({university.qsRating})</span>
                                            </div>
                                        </div>
                                        <div className="coruse-details-thumb">
                                            <img src={getImage(university.images[1])} alt="Image Not Found" />
                                        </div>

                                        <div className="course-details-info">
                                            <ul className="nav nav-tabs course-details-navs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeTab === 'tab_1' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('tab_1')} type="button">
                                                        Overview
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeTab === 'tab_2' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('tab_2')} type="button">
                                                        Courses
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeTab === 'tab_3' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('tab_3')} type="button">
                                                        FAQs
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={activeTab === 'tab_4' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('tab_4')} type="button">
                                                        Reviews
                                                    </button>
                                                </li>
                                            </ul>

                                            <div className="tab-content course-details-tab-content">
                                                {/* Tab Single */}
                                                <div className={activeTab === 'tab_1' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                                    <h2>About this Institution</h2>
                                                    <p>
                                                        {university.overview}
                                                    </p>
                                                    <h2>Vision & Mission</h2>
                                                    <ul className="list-style-one">
                                                        {university.visionMission.map((item, index) => (
                                                            <li key={index}>
                                                                <i className="fas fa-check-circle"></i>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <h2>Scholarship</h2>
                                                    <p>
                                                        {university.scholarship}
                                                    </p>
                                                </div>
                                                {/* End Tab Single */}
                                                {/* Tab Single */}
                                                <div className={activeTab === 'tab_2' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                                    <div className="faq-style-one-items curriculum-accordion">
                                                        <div className="accordion" id="faqAccordion2">
                                                            {university.coursesDetails.map((category, catIndex) => (
                                                                <div key={catIndex} className="accordion-item faq-style-one">
                                                                    <h2 className="accordion-header" id={`headingCourse${catIndex}`}>
                                                                        <button 
                                                                            className={`accordion-button ${expandedCourses === catIndex ? '' : 'collapsed'}`} 
                                                                            type="button" 
                                                                            onClick={() => toggleCourseAccordion(catIndex)}
                                                                            aria-expanded={expandedCourses === catIndex ? 'true' : 'false'} 
                                                                            aria-controls={`collapseCourse${catIndex}`}
                                                                        >
                                                                            <span>{category.category}</span>
                                                                            <FontAwesomeIcon 
                                                                                icon={expandedCourses === catIndex ? faChevronUp : faChevronDown} 
                                                                                style={{ marginLeft: 'auto' }}
                                                                            />
                                                                        </button>
                                                                    </h2>
                                                                    <div 
                                                                        id={`collapseCourse${catIndex}`} 
                                                                        className={`accordion-collapse collapse ${expandedCourses === catIndex ? 'show' : ''}`} 
                                                                        aria-labelledby={`headingCourse${catIndex}`}
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <ul className="curriculum-list">
                                                                                {category.courses.map((course, courseIndex) => (
                                                                                    <li key={courseIndex}>
                                                                                        <div className="left-content">
                                                                                            <span>{String(courseIndex + 1).padStart(2, '0')}</span>
                                                                                            <h5>
                                                                                                <a>
                                                                                                    {course.name}
                                                                                                </a>
                                                                                            </h5>
                                                                                        </div>
                                                                                        <div className="right-content">
                                                                                            <i className="fas fa-clock"></i>
                                                                                            <span>{course.duration}</span>
                                                                                        </div>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Tab Single */}
                                                <div className={activeTab === 'tab_3' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                                    <div className="faq-style-one-items curriculum-accordion">
                                                        <div className="accordion" id="faqAccordion3">
                                                            {university.faqs.map((faq, index) => (
                                                                <div key={index} className="accordion-item faq-style-one">
                                                                    <h2 className="accordion-header" id={`headingFaq${index}`}>
                                                                        <button 
                                                                            className={`accordion-button ${expandedFaqs === index ? '' : 'collapsed'}`} 
                                                                            type="button" 
                                                                            onClick={() => toggleFaqAccordion(index)}
                                                                            aria-expanded={expandedFaqs === index ? 'true' : 'false'} 
                                                                            aria-controls={`collapseFaq${index}`}
                                                                        >
                                                                            <span>{faq.question}</span>
                                                                            <FontAwesomeIcon 
                                                                                icon={expandedFaqs === index ? faChevronUp : faChevronDown} 
                                                                                style={{ marginLeft: 'auto' }}
                                                                            />
                                                                        </button>
                                                                    </h2>
                                                                    <div 
                                                                        id={`collapseFaq${index}`} 
                                                                        className={`accordion-collapse collapse ${expandedFaqs === index ? 'show' : ''}`} 
                                                                        aria-labelledby={`headingFaq${index}`}
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <p>{faq.answer}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Tab Single */}
                                                <div className={activeTab === 'tab_4' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                                    <div className="curriculum-review">
                                                        <div className="curriculum-review-item">
                                                            <div className="total-review">
                                                                <h2>{averageRating}</h2>
                                                                <h4>Wonderful</h4>
                                                                <div className="ratings">
                                                                    {renderStars(Math.floor(averageRating))}
                                                                </div>
                                                                <span>({university.reviews.length} Reviews)</span>
                                                            </div>
                                                            <div className="review-count">
                                                                <div className="review-count-item">
                                                                    <div className="ratings five-out-of-five">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <div className="progress-bar width-90"></div>
                                                                    <span>90%</span>
                                                                </div>
                                                                <div className="review-count-item">
                                                                    <div className="ratings five-out-of-four">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <div className="progress-bar width-80"></div>
                                                                    <span>80%</span>
                                                                </div>
                                                                <div className="review-count-item">
                                                                    <div className="ratings five-out-of-three">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <div className="progress-bar width-70"></div>
                                                                    <span>70%</span>
                                                                </div>
                                                                <div className="review-count-item">
                                                                    <div className="ratings five-out-of-two">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <div className="progress-bar width-60"></div>
                                                                    <span>60%</span>
                                                                </div>
                                                                <div className="review-count-item">
                                                                    <div className="ratings five-out-of-one">
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <div className="progress-bar width-10"></div>
                                                                    <span>10%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="course-review-section mt-80 mt-xs-50">
                                                        {university.reviews.map((review, index) => (
                                                            <div key={index} className="course-review-item-one">
                                                                <div className="thumb">
                                                                    <img src={getImage('default-avatar.png')} alt="Thumb" />
                                                                </div>
                                                                <div className="info">
                                                                    <div className="top">
                                                                        <h4>{review.author}</h4>
                                                                        <span>15 December, 2025</span>
                                                                    </div>
                                                                    <div className="ratings">
                                                                        {renderStars(review.rating)}
                                                                    </div>
                                                                    <p>{review.comment}</p>
                                                                    <div className="bottom">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#"><i className="fas fa-thumbs-up"></i> 202</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#"><i className="fas fa-reply"></i> Reply</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="course-details-category">
                                        {/* Single Item */}
                                        <div className="course-cat-single">
                                            <div className="course-preview-info">
                                                <div className="thumb">
                                                    <img src={getImage(university.videoPreview)} alt="Thumb" />
                                                    <a href="#" className="light video-play-button item-center" onClick={handleVideoClick}>
                                                        <FontAwesomeIcon icon={faPlay} />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <div className="top">
                                                        <a className="btn btn-theme animation btn-sm" href="#">Get Admission Now</a>
                                                    </div>
                                                    <div className="course-includes">
                                                        <div className="info">
                                                            <ul>
                                                                <li>
                                                                    <i className="fas fa-copy"></i> Courses <span>{university.coursesCount}</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-calendar"></i> Next Intake <span>{university.nextIntake}</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-university"></i> Type <span>{university.type}</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-chalkboard-teacher"></i> Faculties <span>{university.faculties}</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-users"></i> Students <span>{university.students}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                        {/* Single Item */}
                                        <div className="course-cat-single">
                                            <div className="top-instructor-widget">
                                                <h4 className="widget-title">Top Counselors</h4>
                                                {/* Single Item */}
                                                {university.counselors.map((counselor, index) => (
                                                    <div key={index} className="top-instructor-single">
                                                        <div className="thumb">
                                                            <img src={getImage(counselor.image)} alt="Image Not Found" />
                                                        </div>
                                                        <div className="info">
                                                            <h5><a href="#">{counselor.name}</a></h5>
                                                            <span>Career Counselor</span>
                                                            <div className="ratings">
                                                                {renderStars(counselor.rating)}
                                                                <span>({counselor.rating})</span>
                                                            </div>
                                                            <ul>
                                                                <li><i className="fas fa-file-alt"></i> {counselor.courses} Courses</li>
                                                                <li><i className="fas fa-user"></i> {counselor.studentsMentored} Students Mentored</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                                {/* Single Item */}
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVideoModalOpen && (
                <div className="video-modal-overlay" onClick={handleCloseModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-modal-close" onClick={handleCloseModal}>&times;</button>
                        <iframe
                            width="100%"
                            src={getYouTubeEmbedUrl(university.videoUrl)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="University Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default UniversityDetails;
