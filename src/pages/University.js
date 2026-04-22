import React from "react";
import { useSearchParams } from "react-router-dom";

// Page sections
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import UniversityFilter from "../components/UniversityFilter/UniversityFilter";

const University = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || '';

  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: faHome },
    { label: 'Universities', isActive: true }
  ];

  return (
    <section className="university-page">
      <Breadcrumb title="All Universities" items={breadcrumbItems} />
      <UniversityFilter initialSearchTerm={searchQuery} initialFilter={filterParam} />
    </section>
  );
};

export default University;
