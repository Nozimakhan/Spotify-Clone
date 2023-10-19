import React from 'react';
import './Home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Featured from '../../components/featured/Featured';
import TopMix from '../../components/top-mix/TopMix';
import MadeForyou from '../../components/made-foryou/MadeForyou';
import Recent from '../../components/recent/Recent';
import JumpBack from '../../components/jump-back/JumpBack';
import Unique from '../../components/unique/Unique';
import FriendActivity from '../../components/friend-activity/FriendActivity';

const Home = () => {
  return (
    <div className='home__wrapper'>
      <div className="home">
        <Sidebar />
        <div className="main__wrapper">
          <Featured />
          <div className="category__wrapper">
            <TopMix />
            <MadeForyou />
            <Recent />
            <JumpBack />
            <Unique />
          </div>
        </div>
        <FriendActivity />
      </div>
    </div>
  )
}

export default Home