import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ title, items = [] }) => (
  <div className="Breadcrumb">
    <div className="breadcrumb-area text-center bg-gray-gradient-secondary">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className={item.isActive ? 'active' : ''}>
                                        {item.href ? (
                                            item.href.startsWith('/') ? (
                                                <Link to={item.href}>
                                                    {item.icon && <i><FontAwesomeIcon icon={item.icon} /></i>} {item.label}
                                                </Link>
                                            ) : (
                                                <a href={item.href}>
                                                    {item.icon && <i><FontAwesomeIcon icon={item.icon} /></i>} {item.label}
                                                </a>
                                            )
                                        ) : (
                                            <>
                                                {item.icon && <i><FontAwesomeIcon icon={item.icon} /></i>} {item.label}
                                            </>
                                        )}
                                    </li>
                                    {index < items.length - 1 && (
                                        <li className="separator">
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default Breadcrumb;
