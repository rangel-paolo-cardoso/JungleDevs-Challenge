import React from 'react';
import ContactSection from '../ContactSection';
import DescriptionSection from '../DescriptionSection';

import GrayBar from '../GrayBar';

import './styles.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <DescriptionSection />
      <GrayBar />
      <ContactSection />
    </main>
  );
};

export default MainSection;