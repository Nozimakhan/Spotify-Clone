import React from 'react';
import './Sidebar.scss';
import { useState, useEffect } from 'react';
import HomeIcon from '../../assets/images/mainhome.svg';
import SearchIcon from '../../assets/images/searchIcon.svg';
import LikeIcon from '../../assets/images/likeIcon.svg';
import LibraryIcon from '../../assets/images/libraryIcon.svg';
import PlusIcon from '../../assets/images/plusIcon.svg';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          "Authorization" : "Bearer BQASJnD0jBpAWramyoz21tBI3s8EVo06BeCJDOsu1Urhpv9lmocjEGfh4VVPMn44NNAmiJ9S7xl9NIWoV3zysKD0UzsuoCXDtEpFFwP6M5zmFcPihHA"
        }
      }
    )
      .then(response => response.json())
      .then(data => setData(data.playlists.items))

  }, [])




  return (
    <div className='sidebar'>
      <div className="links">
        <img src={HomeIcon} alt="" />
        <Link to={'/'}>Home</Link>
      </div>
      <div className="links">
        <img src={SearchIcon} alt="" />
        <Link to={'/'}>Search</Link>
      </div>
      <div className="links">
        <img src={LibraryIcon} alt="" />
        <Link to={'/'}>Your Library</Link>
      </div>
      <div style={{ marginTop: 40 }} className="links">
        <img src={PlusIcon} alt="" />
        <Link to={'/'}>Create Playlist</Link>
      </div>
      <div className="links">
        <img src={LikeIcon} alt="" />
        <Link to={'/like'}>Liked Songs</Link>
      </div>
      <div className="bottom-line"></div>
      <div className="list__wrapper">
        {
          data.map((title, i) => (
            <Link to={`/playlist-info/${title.id}`} title={title.name} style={{textTransform: 'capitalize'}} className='category' key={i}>{title.name.length > 16 ? title.name.slice(0, 16) + "..." : title.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar