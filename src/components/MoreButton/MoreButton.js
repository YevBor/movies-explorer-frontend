import React from 'react';

import './MoreButton.css';

function MoreButton({ buttonTitle }) {
  return (
    <div className="more-btn__container">
      <button className="more-btn" type="button">{buttonTitle}</button>
    </div>
  )
}

export default MoreButton;