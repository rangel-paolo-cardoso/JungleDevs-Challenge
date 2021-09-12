import React from 'react';

import paymentBudget from '../../assets/paymentInfo-section/ImageSection3.png';

import './styles.css';

const PaymentInfoSection = () => (
  <section className="payment-info-section">
    <img src={paymentBudget} alt="Budget information." />
    <div>
      <h2>Shared payments made simple</h2>
      <p>
        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in,
        week out and you might encounter more than a few snares. But not with Hapu. Simply set your
        rates and our automated payment system takes care of the rest. You need never talk money or
        who owes what.
      </p>
      <a href="/#">Read how Bridget’s share (without Hapu) ended over $15</a>
    </div>
  </section>
);

export default PaymentInfoSection;
