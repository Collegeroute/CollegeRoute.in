import React, { useEffect, useState } from 'react';
import universitiesData from '../../data/universities.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTh,
  faList,
  faFilter,
  faMapMarkerAlt,
  faStar as fasStar,
  faStarHalfAlt,
  faFileAlt,
  faTrophy,
  faAngleLeft,
  faAngleRight,
  faSearch,
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

const UniversityFilter = ({ initialSearchTerm = '', initialFilter = '' }) => {
  const [view, setView] = useState('grid');
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const itemsPerPage = 10;

  // Map filter names to filter options
  const filterMapping = {
    'Engineering': { type: 'courses', value: 'engineering' },
    'Medical': { type: 'courses', value: 'medical' },
    'ArtsandScience': { type: 'courses', value: 'arts' },
    'Management': { type: 'courses', value: 'management' },
    'Law': { type: 'courses', value: 'law' },
    'PHD': { type: 'studyLevel', value: 'phd' }
  };

  // Filter states
  const [filters, setFilters] = useState({
    courses: [],
    studyLevel: [],
    country: [],
    city: [],
    fee: []
  });

  // Filter options
  const filterOptions = {
    courses: [
      { id: 'engineering', label: 'Engineering', count: 130 },
      { id: 'medical', label: 'Medical', count: 45 },
      { id: 'pharmacy', label: 'Pharmacy', count: 56 },
      { id: 'law', label: 'Law', count: 24 },
      { id: 'management', label: 'Management', count: 16 },
      { id: 'arts', label: 'Arts & Humanities', count: 54 }
    ],
    studyLevel: [
      { id: 'bachelors', label: 'Bachelors', count: 23 },
      { id: 'masters', label: 'Masters', count: 53 },
      { id: 'phd', label: 'PHD', count: 15 },
      { id: 'cert', label: 'Certification', count: 35 }
    ],
    country: [
      { id: 'india', label: 'India', count: 23 },
      { id: 'usa', label: 'United States', count: 53 },
      { id: 'uk', label: 'United Kingdom', count: 15 },
      { id: 'canada', label: 'Canada', count: 24 },
      { id: 'australia', label: 'Australia', count: 42 }
    ],
    city: [
      { id: 'chennai', label: 'Chennai', count: 23 },
      { id: 'coimbatore', label: 'Coimbatore', count: 53 },
      { id: 'trichy', label: 'Trichy', count: 15 },
      { id: 'salem', label: 'Salem', count: 15 },
      { id: 'mumbai', label: 'Mumbai', count: 15 }
    ],
    fee: [
      { id: 'below1l', label: 'Below ₹1 Lakh', count: 23 },
      { id: '1to2l', label: '₹1 – 2 Lakhs', count: 53 },
      { id: '2to4l', label: '₹2 – 4 Lakhs', count: 15 },
      { id: '4to6l', label: '₹4 – 6 Lakhs', count: 15 },
      { id: 'above6l', label: 'Above ₹6 Lakhs', count: 15 }
    ]
  };

  useEffect(() => {
    setUniversities(universitiesData || []);
    setSearchTerm(initialSearchTerm);
    
    // Apply filter if provided
    if (initialFilter && filterMapping[initialFilter]) {
      const mapConfig = filterMapping[initialFilter];
      setFilters(prev => ({
        ...prev,
        [mapConfig.type]: [mapConfig.value]
      }));
    }
  }, [initialSearchTerm, initialFilter]);

  // Handle filter checkbox change
  const handleFilterChange = (filterType, optionId) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(optionId)
        ? prev[filterType].filter(id => id !== optionId)
        : [...prev[filterType], optionId]
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  // Filter universities based on selected filters and search term
  const filteredUniversities = universities.filter(uni => {
    // Check search term - search by university name
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      if (!uni.name.toLowerCase().includes(searchLower)) return false;
    }

    // If no filters selected, show all (except search filtered out)
    if (Object.values(filters).every(arr => arr.length === 0)) return true;

    // Check courses filter (uni.courses is an array)
    if (filters.courses.length > 0) {
      const hasMatchingCourse = uni.courses && uni.courses.some(course => filters.courses.includes(course));
      if (!hasMatchingCourse) return false;
    }

    // Check study level filter
    if (filters.studyLevel.length > 0 && !filters.studyLevel.includes(uni.studyLevel)) return false;

    // Check country filter
    if (filters.country.length > 0 && !filters.country.includes(uni.country.toLowerCase())) return false;

    // Check city filter
    if (filters.city.length > 0 && !filters.city.includes(uni.city.toLowerCase())) return false;

    // Check fee range filter
    if (filters.fee.length > 0 && !filters.fee.includes(uni.feeRange)) return false;

    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUniversities = filteredUniversities.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getImage = (filename) => {
    return images[filename] || images['image.png'] || '';
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];
    for (let i=0;i<full;i++) stars.push(<i key={`s${i}`} className="fas fa-star"></i>);
    if (half) stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    while (stars.length < 5) stars.push(<i key={`e${stars.length}`} className="far fa-star"></i>);
    return stars;
  };

  return (
    <div className="UniversityFilter">
      <div className="course-filter-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 order-xl-last">
              <div className="course-listing-contentes">
                <div className="row item-flex center mb-40">
                  <div className="col-lg-6 col-md-9">
                    <div className="content">
                      <nav>
                        <div className="nav nav-tabs" role="tablist">
                          <button onClick={() => setView('grid')} className={`nav-link ${view==='grid'?'active':''}`} type="button">
                            <FontAwesomeIcon icon={faTh} /> Grid
                          </button>
                          <button onClick={() => setView('list')} className={`nav-link ${view==='list'?'active':''}`} type="button">
                            <FontAwesomeIcon icon={faList} /> List
                          </button>
                        </div>
                      </nav>
                      <p>Showing {paginatedUniversities.length > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + itemsPerPage, filteredUniversities.length)} of {filteredUniversities.length} results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 text-end">
                    <div className="right"><a href="#">Filter <FontAwesomeIcon icon={faFilter} /></a></div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {view === 'grid' ? (
                    <div className="tab-pane show active">
                      <ul className="vt-products columns-2">
                        {paginatedUniversities.map(u => (
                          <li key={u.id} className="product">
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
                                    <li><FontAwesomeIcon icon={faFileAlt} /> {u.coursesCount} Courses</li>
                                    {u.nirf !== null && <li><FontAwesomeIcon icon={faTrophy} /> #{u.nirf} NIRF Ranking</li>}
                                  </ul>
                                </div>
                                <div className="bottom-meta">
                                  <a href={u.url}>View Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                  <h2 className="pricestart">Starts from <div className="price"> {u.price}</div></h2>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="tab-pane">
                      <ul className="vt-products columns-1">
                        {paginatedUniversities.map(u => (
                          <li key={u.id} className="product">
                            <div className="course-style-one-item hover-less">
                              <div className="thumb">
                                <img src={getImage(u.images[0])} alt={u.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                              </div>
                              <div className="info">
                                <div className="course-tags">
                                  <a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> {u.city}, {u.country}</a>
                                  <div className="course-rating">{renderStars(u.rating)} <span>({u.ratingCount})</span></div>
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
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav className="woocommerce-pagination mt-60">
                    <ul className="page-numbers">
                      <li>
                        <button 
                          onClick={() => handlePageChange(currentPage - 1)} 
                          className="previous page-numbers"
                          disabled={currentPage === 1}
                          onMouseEnter={(e) => {
                            if (currentPage !== 1) {
                              e.target.style.backgroundColor = '#17a697';
                              e.target.style.borderColor = '#17a697';
                              e.target.style.color = '#fff';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentPage !== 1) {
                              e.target.style.backgroundColor = '#fff';
                              e.target.style.borderColor = '#e0e0e0';
                              e.target.style.color = '#333';
                            }
                          }}
                          style={{
                            width: '40px',
                            height: '40px',
                            minWidth: '40px',
                            minHeight: '40px',
                            padding: '0',
                            borderRadius: '50%',
                            border: '1px solid #e0e0e0',
                            backgroundColor: currentPage === 1 ? '#f5f5f5' : '#fff',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            color: currentPage === 1 ? '#999' : '#333',
                            opacity: currentPage === 1 ? 0.5 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <li key={page}>
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`page-numbers ${currentPage === page ? 'current' : ''}`}
                            onMouseEnter={(e) => {
                              if (currentPage !== page) {
                                e.target.style.backgroundColor = '#17a697';
                                e.target.style.color = '#fff';
                                e.target.style.borderColor = '#17a697';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (currentPage !== page) {
                                e.target.style.backgroundColor = '#fff';
                                e.target.style.color = '#333';
                                e.target.style.borderColor = '#e0e0e0';
                              }
                            }}
                            style={{
                              width: '40px',
                              height: '40px',
                              minWidth: '40px',
                              minHeight: '40px',
                              padding: '0',
                              borderRadius: '50%',
                              border: currentPage === page ? 'none' : '1px solid #e0e0e0',
                              backgroundColor: currentPage === page ? '#17a697' : '#fff',
                              color: currentPage === page ? '#fff' : '#333',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: currentPage === page ? '600' : '400',
                              display: 'flex',
                            minWidth: '40px',
                            minHeight: '40px',
                            padding: '0',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button 
                          onClick={() => handlePageChange(currentPage + 1)} 
                          className="next page-numbers"
                          disabled={currentPage === totalPages}
                          onMouseEnter={(e) => {
                            if (currentPage !== totalPages) {
                              e.target.style.backgroundColor = '#17a697';
                              e.target.style.borderColor = '#17a697';
                              e.target.style.color = '#fff';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentPage !== totalPages) {
                              e.target.style.backgroundColor = '#fff';
                              e.target.style.borderColor = '#e0e0e0';
                              e.target.style.color = '#333';
                            }
                          }}
                          style={{
                            width: '40px',
                            height: '40px',
                            minWidth: '40px',
                            minHeight: '40px',
                            padding: '0',
                            borderRadius: '50%',
                            border: '1px solid #e0e0e0',
                            backgroundColor: currentPage === totalPages ? '#f5f5f5' : '#fff',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            color: currentPage === totalPages ? '#999' : '#333',
                            opacity: currentPage === totalPages ? 0.5 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </li>
                    </ul>
                  </nav>
                )}

              </div>
            </div>

            {/* Sidebar Filters */}
            <div className="col-xl-4 pr-60 pr-md-15 pr-xs-15 mt-md-50 mt-xs-50">
              <div className="course-filter-sidebar">
                
                {/* Search */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">Search</h4>
                  <form className="course-search-form" onSubmit={handleSearch}>
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search University" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                  </form>
                </div>

                {/* Courses Filter */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">Courses</h4>
                  <ul className="check-box-list">
                    {filterOptions.courses.map(option => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input 
                            type="checkbox" 
                            id={`courses-${option.id}`} 
                            checked={filters.courses.includes(option.id)}
                            onChange={() => handleFilterChange('courses', option.id)}
                          />
                          <label htmlFor={`courses-${option.id}`}> {option.label}</label>
                        </div>
                        {/* <span>({option.count})</span> */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Study Level Filter */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">Study Level</h4>
                  <ul className="check-box-list">
                    {filterOptions.studyLevel.map(option => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input 
                            type="checkbox" 
                            id={`studyLevel-${option.id}`}
                            checked={filters.studyLevel.includes(option.id)}
                            onChange={() => handleFilterChange('studyLevel', option.id)}
                          />
                          <label htmlFor={`studyLevel-${option.id}`}> {option.label}</label>
                        </div>
                        {/* <span>({option.count})</span> */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Country Filter */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">Country</h4>
                  <ul className="check-box-list">
                    {filterOptions.country.map(option => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input 
                            type="checkbox" 
                            id={`country-${option.id}`}
                            checked={filters.country.includes(option.id)}
                            onChange={() => handleFilterChange('country', option.id)}
                          />
                          <label htmlFor={`country-${option.id}`}> {option.label}</label>
                        </div>
                        {/* <span>({option.count})</span> */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* City Filter */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">City</h4>
                  <ul className="check-box-list">
                    {filterOptions.city.map(option => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input 
                            type="checkbox" 
                            id={`city-${option.id}`}
                            checked={filters.city.includes(option.id)}
                            onChange={() => handleFilterChange('city', option.id)}
                          />
                          <label htmlFor={`city-${option.id}`}> {option.label}</label>
                        </div>
                        {/* <span>({option.count})</span> */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Annual Tuition Fee Filter */}
                <div className="course-filter-sidebar-item">
                  <h4 className="widget-title">Annual Tuition Fee</h4>
                  <ul className="check-box-list">
                    {filterOptions.fee.map(option => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input 
                            type="checkbox" 
                            id={`fee-${option.id}`}
                            checked={filters.fee.includes(option.id)}
                            onChange={() => handleFilterChange('fee', option.id)}
                          />
                          <label htmlFor={`fee-${option.id}`}> {option.label}</label>
                        </div>
                        {/* <span>({option.count})</span> */}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityFilter;
