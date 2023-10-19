import './App.scss';
import AllRoutes from './routes';
import { useEffect, useState } from 'react';
import Player from './routes/player/Player';

function App() {
  const [playlist, setPlaylist] = useState([]);

  const CLIENT_ID = 'f223febc12644a388218fdf278416df4';
  const CLIENT_SECRET = "59a66f14db234b7d8809e576e5d10ccd";

  useEffect(() => {
    const fetchData = async () => {
      const response =  await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials',
      })
      const auth = await response.json()
      localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
      setPlaylist(auth.access_token)
    }
    fetchData()
  }, [])

  console.log(playlist)



  return (
    <div className="App">
      <AllRoutes />
      <Player/>
    </div>
  );
}

export default App;
