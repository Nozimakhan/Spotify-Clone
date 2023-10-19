import { Route, Routes } from "react-router-dom";
import Home from '../routes/home/Home';
import Like from '../routes/like/Like';
import PlaylistInfo from "./playlist-info/PlaylistInfo";
import Player from "./player/Player";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/like' element={<Like/>}/>
            <Route path='/playlist-info/:id' element={<PlaylistInfo/>}/>
            <Route path='/player' element={<Player/>}/>
        </Routes>
    )
}

export default AllRoutes