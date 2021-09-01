import React from 'react';
import accountLink from '../../images/account-link.svg';

import './ProfileEditButton.css';


function ProfileEditButton() {

  return (
    <img alt="account-icon" className="profile__account-link" src={accountLink} />
  )
}

export default ProfileEditButton;
