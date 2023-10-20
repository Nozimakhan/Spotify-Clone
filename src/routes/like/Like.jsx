import React from 'react';
import './Like.scss';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiTwotoneStop } from 'react-icons/ai';
import Sidebar from '../../components/sidebar/Sidebar';
import FriendActivity from '../../components/friend-activity/FriendActivity';
import clock from '../../assets/images/clock.svg';
import download from '../../assets/images/download.svg';
import { PiHeartThin } from 'react-icons/pi'
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import option from '../../assets/images/option.svg';
import play from '../../assets/images/play.svg';
import search from '../../assets/images/searchIcon.svg';
import select from '../../assets/images/select.svg';
import no from '../../assets/images/no.svg';
import LikeIcon from '../../assets/images/likeIcon.svg';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { dislikeMusic } from '../../redux/reducer/likeSlice';

const Like = () => {
  const dispatch = useDispatch();

  const { likedSongs } = useSelector(state => state.likeReducer);

  return (
    <div className="pl-bg-one">
      <div className='playlist-info__wrapper-one'>
        <Sidebar />
        <div className="playlist-like-info-one">
          <div className="play-bg"></div>
          <div className="container">
            <div className="btns">
              <button className="btn-bg">
                <AiOutlineLeft />
              </button>
              <button className="btn-bg">
                <AiOutlineRight />
              </button>
            </div>
            <div className="album-info">
              <div className="album-img">
                <img key={uuidv4} src={LikeIcon} alt="" />
              </div>
              <div key={uuidv4} className="album-text">
                <p className='type'>PUBLIC</p>
                <h1>Liked Songs</h1>
                <p className='madefor' key={uuidv4}>Made for
                  <span className='artist'>nozima</span>
                  <AiTwotoneStop />
                  <span className='tracks'>{likedSongs.length} songs</span>
                </p>
              </div>
            </div>
            <div className="album-nav">
              <div className="nav">
                <button className='play' ><img src={play} alt="" /></button>
                <button className='heart' ><PiHeartThin/></button>
                <button className='download' ><img src={download} alt="" /></button>
                <button className='menu' ><img src={option} alt="" /></button>
              </div>
              <div className="select-search">
                <button className='search'><img src={search} alt="" /></button>
                <div className="select">
                  <select id="">
                    <option value="Custom order">Custom order</option>
                  </select>
                  <img src={select} alt="" />
                </div>
              </div>
            </div>
            <div className="table-title">
              <div className="th-title">
                <img src={no} alt="" />
                <p>TITLE</p>
              </div>
              <p>ALBUM</p>
              <p>DATE ADDED</p>
              <div className="clock"><img src={clock} alt="" /></div>
            </div>
            <div className="table-border"></div>
            <table>
              <tbody>
                {
                  likedSongs?.map((music, i) => (
                    <tr key={i}>
                      <td className='number'><p>{i + 1}</p></td>
                      <td className='song'>
                        <div className="song-wrapper">
                          <img width={52} height={52} src={music.album?.images?.[0].url} alt="" />
                          <div className="song-title">
                            <p title={music.name} className='song-name'>{music.name}</p>
                            <span className='artist-name'>{music.artists?.[0].name}</span>
                          </div>
                        </div>
                      </td>
                      <td className='album'> <p title={music.album?.name}>{music.album?.name}</p></td>
                      <td className='empty'>
                        <button onClick={() => dispatch(dislikeMusic(music.track))} >{likedSongs?.some(product => product.id === music.track?.id) ? <FiHeart className="like-btn" /> :  <FaHeart style={{ color: 'rgba(99, 207, 108, 1)' }} className="like-btn" /> }</button>
                      </td>
                      <td className='like-time'>
                        <p>{Math.floor(music.duration_ms / 60000)} : {Math.floor((music.duration_ms % 60000) / 1000).toString().padStart(2, '0')}</p>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <FriendActivity />
      </div>
    </div>
  )
}

export default Like