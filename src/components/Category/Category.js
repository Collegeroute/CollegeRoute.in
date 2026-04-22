import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import woodenbg from '../../images/wooden.png';

const filterMap = {
    "Engineering": "Engineering",
    "Medical": "Medical",
    "Arts & Science": "ArtsandScience",
    "Management": "Management",
    "Law": "Law",
    "Research": "PHD"
};

const items = [
    {
        title: "Engineering",
        image: require("../../images/courses/engineering.jpg"),
        programs: 22
    },
    {
        title: "Medical",
        image: require("../../images/courses/medical.jpg"),
        programs: 3
    },
    {
        title: "Arts & Science",
        image: require("../../images/courses/artsandscience.jpg"),
        programs: 22
    },
    {
        title: "Management",
        image: require("../../images/courses/management.jpg"),
        programs: 4
    },
    {
        title: "Law",
        image: require("../../images/courses/law.jpg"),
        programs: 3
    },
    {
        title: "Research",
        image: require("../../images/courses/research.jpg"),
        programs: 2
    }
];

const Category = () => (
    <div className="category-style-two-area default-padding bg-cover bg-gray-secondary" style={{ backgroundImage: `url(${woodenbg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Top Courses</h4>
                        <h2 className="title split-text">Most Demanding Courses in 2026</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="category-style-two-carousel swiper">
                        <div className="swiper-wrapper">
                            {items.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="category-style-two-item wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                                        <a href={`/universities?filter=${filterMap[item.title]}`}>
                                            <div className="info">
                                                <h4>{item.title}</h4>
                                                <span>{item.programs} Programmes</span>
                                            </div>
                                            <i><FontAwesomeIcon icon={faArrowRightLong} /></i>
                                            <div className="thumb">
                                                <img src={item.image} alt="Image Not Found"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Category;