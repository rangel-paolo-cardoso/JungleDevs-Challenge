import React from 'react';

import calendarIcon from '../../../assets/footer-icons/Icon.svg';

const ScheduleContainer = () => (
  <div className="schedule-container">
    <h2>Become a nanny share host</h2>
    <p>Takes less than 5 minutes to get started</p>
    <div className="schedule-nanny-share">
      <img src={calendarIcon} alt="Calendar icon." />
      <div>
        <span>Create Your Nanny Share</span>
        <span>Takes less than 5 minutes</span>
      </div>
    </div>
    <a href="/#">Or browse local nanny-shares</a>
  </div>
);

export default ScheduleContainer;
