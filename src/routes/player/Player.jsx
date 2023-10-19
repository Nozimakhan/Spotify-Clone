import './Player.scss';
import shuffle from '../../assets/images/shuffleIcon.svg';
import repeat from '../../assets/images/repeat.svg';
import { MdPlayCircleFilled } from 'react-icons/md';
import { MdOutlinePauseCircleFilled } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import volume from '../../assets/images/volume.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Player = () => {
    const isPlaying = useSelector(state => state.isPlaying);
    console.log(isPlaying);
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false);

    function handleClick(playing) {
        dispatch({ playing, type: "SET_PLAYING" })
    }


    return (
        <div className='player-info'>
            <div className='player'>
                <div className="music">
                    <audio controls ></audio>
                    <div className="music-img">
                        <img  alt="img" />
                    </div>
                    <div className="music-owner">
                        <div className="artist">
                            <p className='music-name'>music.name</p>
                            <p className='artist-name'>music.artists?.[0].name</p>
                        </div>
                        <p><FaHeart style={{ color: '#63CF6C', width: '28', height: '28' }} /></p>
                    </div>
                </div>
                <div className="spotify-player">
                    <div className="music-player">
                        <img src={shuffle} alt="" />
                        <button onClick={() => { setPlay(!play); handleClick() }}>{play ? <MdOutlinePauseCircleFilled style={{ width: '48', height: '48' }} /> : <MdPlayCircleFilled style={{ width: '48', height: '48' }} />}</button>
                        <img src={repeat} alt="" />
                    </div>
                    <div className="navigation">
                        <div className="navigation__wrapper">
                            <div className="seek__bar" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="volume">
                    <img src={volume} alt="" />
                    <input type="range" />
                </div>
            </div>
        </div>
    )
}

export default Player