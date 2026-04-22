import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in learning more about your career counseling services. Could you please help me explore university options and guidance for my future? Thank you!"
  );
  const whatsappLink = `https://wa.me/917871431357?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="floating-whatsapp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default FloatingWhatsApp;
