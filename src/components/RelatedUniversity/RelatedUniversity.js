import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import universitiesData from '../../data/universities.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar,
  faStarHalf,
  faMapMarkerAlt,
  faFileAlt,
  faTrophy,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

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

const RelatedUniversity = ({ limit = 6 }) => {
  const [relatedUniversities, setRelatedUniversities] = useState([]);

  useEffect(() => {
    // Get a random selection of universities from the data
    if (universitiesData && universitiesData.length > 0) {
      const shuffled = [...universitiesData].sort(() => Math.random() - 0.5);
      setRelatedUniversities(shuffled.slice(0, limit));
    }
  }, [limit]);

  const getImage = (filename) => {
    return images[filename] || images['image.png'] || '';
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++) {
      stars.push(<FontAwesomeIcon key={`s${i}`} icon={faStar} />);
    }
    if (half) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} />);
    }
    while (stars.length < 5) {
      stars.push(<i key={`e${stars.length}`} className="far fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="RelatedUniversity">
      <div className="related-course-area overflow-hidden default-padding-bottom">
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-7">
                <h4 className="sub-title">Related University</h4>
                <h2 className="title">You might be interested in</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                resizeObserver={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="related-course-carousel"
              >
                {relatedUniversities.map((u) => (
                  <SwiperSlide key={u.id}>
                    <div className="course-style-one-item hover-less">
                      <div className="thumb">
                        <img src={getImage(u.images[0])} alt={u.name} />
                      </div>
                      <div className="info">
                        <div className="course-tags">
                          <a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> {u.city}</a>
                          <div className="course-rating">
                            {renderStars(u.rating)}
                            <span>({u.ratingCount})</span>
                          </div>
                        </div>
                        <h4><a href={u.url}>{u.name}</a></h4>
                        <div className="course-meta">
                          <ul>
                            <li><FontAwesomeIcon icon={faFileAlt} /> {u.courses.length} Courses</li>
                            {u.nirf !== null && <li><FontAwesomeIcon icon={faTrophy} /> #{u.nirf} NIRF Ranking</li>}
                          </ul>
                        </div>
                        <div className="bottom-meta">
                          <a href={u.url}>View Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                          <h2 className="pricestart">Starts from <div className="price"> {u.price}</div></h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedUniversity;
