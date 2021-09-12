import React from 'react';

import DescriptionSection from '../DescriptionSection';
import ContactSection from '../ContactSection';
import PaymentInfoSection from '../PaymentInfoSection';
import LongTermSection from '../LongTermSection';
import ComingSoonSection from '../ComingSoonSection';
import Footer from '../Footer';
import GrayBar from '../GrayBar';

import './styles.css';

const MainSection = () => (
  <main className="main-section">
    <DescriptionSection />
    <GrayBar />
    <ContactSection />
    <PaymentInfoSection />
    <GrayBar />
    <LongTermSection />
    <GrayBar />
    <ComingSoonSection />
    <Footer />
  </main>
);

export default MainSection;
