import { useRef, useState } from 'react';
import { IoPlayBack, IoPlay, IoPlayForward, IoPause, IoCloseCircle, IoMusicalNotes } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import './index.scss';
import playlist from '../../data/playlist';
import ProgressBar from "@ramonak/react-progress-bar";

export default function MusicPlayer() {
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(playlist[0]);
  const [played, setPlayed] = useState(0);
  const [isFirstTimePlaying, setIsFirstTimePlaying] = useState(true);
  const playerRef = useRef(null);

  // console.log('Current Music', currentMusic);

  const findIndexByName = (song) => {
    if (playlist) {
      // console.log('Finding current index by name: ', playlist.findIndex(playlistTrack => playlistTrack.name === song.name));
      return playlist.findIndex(playlistTrack => playlistTrack.name === song.name);
    };
  };

  const playback = () => {
    // If we aren't at 0 seconds, go to beginning of the track
    if (played > 0.01) {
      return playerRef.current.seekTo(0);
    }

    // If there is no earlier track,  do not do anything
    if (!playlist[findIndexByName(currentMusic) - 1]) {
      return null;
    }

    setIsFirstTimePlaying(true);
    setVolume(0);
    return setCurrentMusic(playlist[findIndexByName(currentMusic) - 1]);
  };

  const playForward = () => {
    // If there is no next track, restart from beginning
    if (!playlist[findIndexByName(currentMusic) + 1]) {
      setCurrentMusic(playlist[0]);
    } else {
      setCurrentMusic(playlist[findIndexByName(currentMusic) + 1]);
    }

    setIsFirstTimePlaying(true);
    setVolume(0);

  };

  const handleProgress = (song) => {
    setPlayed(song.played);
  };

  const handlePlay = () => {

    if (isFirstTimePlaying) {
      playerRef.current.seekTo(0);
      setVolume(0.5);
      setIsFirstTimePlaying(false);
    }

  };

  return (
    <div className='music-player-container'>
      <ReactPlayer
        ref={playerRef}
        className='react-player'
        url={currentMusic.url}
        width='0'
        height='0'
        playing={playing}
        volume={volume}
        onEnded={() => playForward()}
        onProgress={handleProgress}
        onPlay={handlePlay}
        playsInline
      />

      <div className={musicPlayerOpen ? 'music-player' : 'minimized'}>

        {musicPlayerOpen ? (
          <div className="settings">
            <IoCloseCircle onClick={() => setMusicPlayerOpen(false)} className="music-player-close" />
            <a className='music-title' href={currentMusic.url} target='_blank' rel="noreferrer">{currentMusic.name}</a>

            <div className="progress-bar-div">
              <ProgressBar
                completed={played}
                maxCompleted={1}
                className="progress-bar"
                bgColor="#ffe77a"
                baseBgColor='#ebe8e2'
                height="3.5px"
                isLabelVisible={false}

              />
            </div>

            <div className='music-controls'>

              <IoPlayBack onClick={playback} className='playback-button' />
              {playing ?
                <IoPause className='pause-button' onClick={() => setPlaying(false)} />
                : <IoPlay onClick={() => setPlaying(true)} className='play-button' />}

              <IoPlayForward onClick={playForward} className='playforward-button' />

              <input
                type="range" min="0" max="1"
                step="any" value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="slider" id="myRange" />

            </div>
          </div>
        ) : <IoMusicalNotes onClick={() => setMusicPlayerOpen(true)} className='music-player-opener' />}

      </div>

    </div>);

}