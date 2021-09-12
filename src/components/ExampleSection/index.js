import React from 'react';

import profileImage from '../../assets/example-section/ProfileImage.png';

import './styles.css';

const ExamploSection = () => (
  <section className="example-section">
    <img src={profileImage} alt="A woman's profile." />
    <p>Sarah’s day care available now in North Sydney</p>
    <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
  </section>
);

export default ExamploSection;
