import React from 'react';

import imageSection1Large from '../../assets/description-section/ImageSection1Large.png';

import './styles.css';

const DescriptionSection = () => {
  return (
    <section className="description-section">
      <div>
        <h3>Share your home, nanny and costs</h3>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting
          your costs in half be, well, fantastic?!
          If only it was easy to connect with other parents to share your costs?
          Well now it is, with Hapu. <span>Hapu means tribe</span> and
          it’s our foundational
          3 tribal principles that empowers you to create and manage your own tribe.
          A tribe that together has the power to create new affordable solutions in
          childcare that work for you and your community.
        </p>
        <a href="/#">Ready to get started?</a>
      </div>
      <img src={imageSection1Large} alt="Example of nanny location and costs." />
    </section>
  );
};

export default DescriptionSection;