import React from 'react';

import DescriptionSection from '../DescriptionSection';
import ContactSection from '../ContactSection';
import PaymentInfoSection from '../PaymentInfoSection';
import LongTermSection from '../LongTermSection';
import ComingSoonSection from '../ComingSoonSection';
import GrayBar from '../GrayBar';

import './styles.css';

const MainSection = () => (
  <main className="main-section">
    <DescriptionSection />
    <GrayBar />
    <ContactSection />
    <GrayBar />
    <PaymentInfoSection />
    <GrayBar />
    <LongTermSection />
    <GrayBar />
    <ComingSoonSection />
  </main>
);

export default MainSection;
