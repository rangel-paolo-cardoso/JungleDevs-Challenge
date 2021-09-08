import React from 'react';
import ContactSection from '../ContactSection';
import DescriptionSection from '../DescriptionSection';

import './styles.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <DescriptionSection />
      <ContactSection />
    </main>
  );
};

export default MainSection;