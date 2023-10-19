import React, { useState, useEffect } from 'react';
import './Featured.scss';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          "Authorization": "Bearer BQAq5K79b8_kd_2fiPRNoKqXl0R4S9cwdmYzfyAGXvfgUCYlQMsNmLqLZEqzxsij3kx3v-joqHZjw_2Ws5xWeSIoKX_1gS5QD6fF0KHj7ggyNGrSZdE"
        }
      }
    )
      .then(response => response.json())
      .then(data => setData(data.playlists.items))

  }, [])


  return (
    <div className='container'>
      <div className="btns">
        <button className="btn-bg">
          <AiOutlineLeft />
        </button>
        <button className="btn-bg">
          <AiOutlineRight />
        </button>
      </div>
      <h1>Good afternoon</h1>
      <div className="categories__wrapper">
        {
          data.slice(0, 6).map((category, index) => (
            <Link to={`/playlist-info/${category.id}`} key={index} className="category-box">
              <img src={category.images[0].url} alt="" />
              <p style={{ textTransform: 'capitalize' }}>{category.name}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Featured