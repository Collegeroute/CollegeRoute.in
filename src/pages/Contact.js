import React from "react";

// Page sections
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Map from "../components/Map/Map";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ContactUs from "../components/ContactUs/ContactUs";
import { faHome } from '@fortawesome/free-solid-svg-icons';

/**
 * Contact Page Component
 * Displays the contact page with breadcrumb, contact form, contact info, and map
 */
const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: faHome },
    { label: 'Contact', isActive: true }
  ];

  return (
    <section className="contact-page">
      <Breadcrumb title="Get in Touch" items={breadcrumbItems} />
      <ContactUs />
      <ContactInfo />
      <Map />
    </section>
  );
};

export default Contact;
