import './Player.scss';
import shuffle from '../../assets/images/shuffleIcon.svg';
import repeat from '../../assets/images/repeat.svg';
import { MdPlayCircleFilled } from 'react-icons/md';
import { MdOutlinePauseCircleFilled } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import volume from '../../assets/images/volume.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Player = () => {
    const { currentSong } = useSelector(state => state.playerReducer);
    const [isPlaying, setIsPlaying] = useState(false);

    var music = document.getElementById("myAudio")

    function playMusic() {
        music.play();
    }

    function pauseMusic() {
        music.pause();
    }


    function volumeIncrease(e) {
        music.volume = e.target.value / 100;
    }



    return (
        <div className='player-info'>
            <div className='player'>
                <div className="music">
                    <audio src={currentSong[0]?.preview_url} controls id='myAudio'>
                        <source  controls src={currentSong[0]?.preview_url} />
                    </audio>
                    <div className="music-img">
                        <img width={50} height={50} src={currentSong[0]?.album?.images?.[0].url} alt="" />
                    </div>
                    <div className="music-owner">
                        <div className="artist">
                            <p title={currentSong[0]?.name} className='music-name'>{currentSong[0]?.name.length > 15 ? currentSong[0]?.name.slice(0, 15) + "..." : currentSong[0]?.name}</p>
                            <p className='artist-name'>{currentSong[0]?.artists?.[0].name}</p>
                        </div>
                        <p><FaHeart style={{ color: '#63CF6C', width: '28', height: '28' }} /></p>
                    </div>

                </div>
                <div className="spotify-player">
                    <div className="music-player">
                        <img src={shuffle} alt="" />
                        <button onClick={() => setIsPlaying(!isPlaying)}>{ isPlaying ? <MdOutlinePauseCircleFilled onClick={pauseMusic} /> : <MdPlayCircleFilled style={{color: '#63CF6C'}}  onClick={playMusic}/> }</button>
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
                    <input type="range" id='volume' onClick={volumeIncrease} />
                </div>
            </div>
        </div>
    )
}

export default Player