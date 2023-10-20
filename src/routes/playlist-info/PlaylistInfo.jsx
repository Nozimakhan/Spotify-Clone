import './PlaylistInfo.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiTwotoneStop } from 'react-icons/ai';
import Sidebar from '../../components/sidebar/Sidebar';
import FriendActivity from '../../components/friend-activity/FriendActivity';
import clock from '../../assets/images/clock.svg';
import download from '../../assets/images/download.svg';
import { PiHeartThin } from 'react-icons/pi';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import option from '../../assets/images/option.svg';
import play from '../../assets/images/play.svg';
import search from '../../assets/images/searchIcon.svg';
import select from '../../assets/images/select.svg';
import no from '../../assets/images/no.svg';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { likeMusic } from '../../redux/reducer/likeSlice';
import { PlayAudio } from '../../redux/reducer/playerSlice';



const PlaylistInfo = () => {
    const {likedSongs} = useSelector(state => state.likeReducer)
    const {currentSong} = useSelector(state => state.playerReducer)
    const dispatch = useDispatch();
    const [data, setData] = useState([]); 
    let playlistInfoInURL = useParams();

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/playlists/${playlistInfoInURL.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": 'Bearer BQDQzFA9FJaQATb0-egm-OMcDGI7eIjdLu7LwHbSQUZ9BzaiR0PIeMhdZsh28HtCpvEOutC1fGjPYka8whiDrezSE9EhrL23kWnSZSrwIR_-d6DnNBo'
                }
            }
        )
            .then(response => response.json())
            .then(data => setData(data))

    }, [playlistInfoInURL.id])



    return (
        <div className="pl-bg">
            <div className='playlist-info__wrapper'>
                <Sidebar />
                <div className="playlist-info">
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
                                <img key={uuidv4} src={data?.images?.[0].url} alt="" />
                            </div>
                            <div key={uuidv4} className="album-text">
                                <p className='type'>{data.type}</p>
                                <h1 title={data.name}>{data?.name?.length > 15 ? data.name.slice(0, 15) + "..." : data.name}</h1>
                                <p className='desc'>{data.description}</p>
                                <p className='madefor' key={uuidv4}>Made by
                                    <span className='artist'>{data?.name}</span>
                                    <AiTwotoneStop />
                                    <span className='tracks'>{data?.tracks?.total} songs,</span>
                                    <span className='time'>{Math.floor(data?.tracks?.items?.[0].track?.duration_ms / 60000)}hr</span>
                                    <span>{Math.floor(data?.tracks?.items?.[0].track?.duration_ms / 60000).toString().padStart(2, '0')}min</span>
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
                            <div className="th-mini-title">
                                <p>ALBUM</p>
                                <p>DATE ADDED</p>
                                <div className="clock"><img src={clock} alt="" /></div>
                            </div>
                        </div>
                        <div className="table-border"></div>
                        <table>
                            <tbody>
                                {
                                    data?.tracks?.items.map((music, i) => (
                                        <tr onClick={()=> dispatch(PlayAudio(music.track)) } key={i}>
                                            {
                                                currentSong?.some(song => song.id === music.track?.id)
                                            }
                                            <td className='number'><p>{i + 1}</p></td>
                                            <td className='song'>
                                                <div className="song-wrapper">
                                                    <img width={52} height={52} src={music.track?.album?.images?.[0].url} alt="" />
                                                    <div className="song-title">
                                                        <p title={music.track?.name} className='song-name'>{music.track?.name.length > 20 ? music.track?.name.slice(0, 20) + "..." : music.track?.name}</p>
                                                        <span className='artist-name'>{music.track?.artists?.[0].name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='album'> <p title={music.track?.album?.name}>{music.track?.album?.name.length > 20 ? music.track?.album?.name.slice(0, 20) + "..." : music.track?.album?.name}</p></td>
                                            <td className='empty'>
                                                <button onClick={() => dispatch(likeMusic(music.track))} >{likedSongs?.some(product => product.id === music.track?.id) ? <FaHeart style={{ color: 'rgba(99, 207, 108, 1)' }} className="like-btn" /> : <FiHeart className="like-btn"/> }</button>
                                            </td>
                                            <td className='like-time'>
                                                <p>{Math.floor(music.track?.duration_ms / 60000)} : {Math.floor((music.track?.duration_ms % 60000) / 1000).toString().padStart(2, '0')}</p>
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

export default PlaylistInfo