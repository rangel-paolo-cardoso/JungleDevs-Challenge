import React from 'react';
import DescriptionSection from './components/DescriptionSection';
import ExamploSection from './components/ExampleSection';
import Header from './components/Header';

import './main.css';

const App = () => (
  <>
    <Header />
    <ExamploSection />
    <DescriptionSection />
  </>
);

export default App;
