import React from 'react';
import './FriendActivity.scss';
import userPlus from '../../assets/images/userplus.svg';
import closeIcon from '../../assets/images/close.svg';
import userIcon from '../../assets/images/userIcon.svg';
import { Link } from 'react-router-dom';

const FriendActivity = () => {
  return (
    <div className='friend'>
      <div className="title">
        <h3>Friend Activity</h3>
        <Link><img src={userPlus} alt="" /></Link>
        <Link><img src={closeIcon} alt="" /></Link>
      </div>
      <p style={{marginTop: 50}}>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className="users__wrapper">
        <Link><img src={userIcon} alt="" /></Link>
        <Link><img src={userIcon} alt="" /></Link>
        <Link><img src={userIcon} alt="" /></Link>
      </div>
      <p>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button>SETTINGS</button>
    </div>
  )
}

export default FriendActivity