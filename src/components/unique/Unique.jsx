import React, {useState, useEffect} from 'react';
import './Unique.scss';
import { Link } from 'react-router-dom';

const Unique = () => {
  const [data, setData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
      {
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setData(data.playlists.items))

  }, [])


  return (
    <div className='container'>
      <div className="title-cart">
        <h2>Uniquely yours</h2>
        <button onClick={() => setSeeAll(!seeAll)}>{seeAll ? "BACK" : "SEE ALL"}</button>
      </div>
      <div className="cart__wrapper">
        {
         seeAll ? data.map((cart, i) => (
          <div key={i} className="cart-box">
            <Link to={`/playlist-info/${cart.id}`}>
              <img src={cart.images[0].url} alt="" />
            </Link>
            <h4 title={cart.name}>{cart.name.length > 14 ? cart.name.slice(0, 14) + "..." : cart.name}</h4>
            <p title={cart.description}>{cart.description.length > 32 ? cart.description.slice(0, 32) + "..." : cart.description}</p>
          </div>
        )) :  data.slice(0, 4).map((cart, i) => (
          <div key={i} className="cart-box">
            <Link to={`/playlist-info/${cart.id}`}>
              <img src={cart.images[0].url} alt="" />
            </Link>
            <h4 title={cart.name}>{cart.name.length > 14 ? cart.name.slice(0, 14) + "..." : cart.name}</h4>
            <p title={cart.description}>{cart.description.length > 32 ? cart.description.slice(0, 32) + "..." : cart.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Unique