import { useRef, useState } from 'react';
import { IoPlayBack, IoPlay, IoPlayForward, IoPause, IoCloseCircle, IoMusicalNotes } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import './index.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

const playlist = [
  {
    name: 'Seven Lions @ Lake Kachess',
    url: 'https://www.youtube.com/watch?v=D7CaablOAY8&t=1101s&ab_channel=SEVENLIONSofficial'
  },
  {
    name: 'Gryffin @ Kauai, Hawaii',
    url: 'https://www.youtube.com/watch?v=0fStWP79Z5A&ab_channel=GRYFFIN'
  },
  {
    name: 'John Summit @ Zamna Tulum',
    url: 'https://www.youtube.com/watch?v=wwqqWzlrL6M&t=3184s&ab_channel=JohnSummit'
  },
  {
    name: 'Ben Bohmer @ Cappadocia, Turkey',
    url: 'https://www.youtube.com/watch?v=RvRhUHTV_8k&ab_channel=Cercle'
  },
  {
    name: 'Anjunadeep 11 - Continuous Mix',
    url: 'https://www.youtube.com/watch?v=-9BM6jGxW5Y&ab_channel=Anjunadeep'
  },
  {
    name: 'Anjunadeep 13 - Continuous Mix',
    url: 'https://www.youtube.com/watch?v=QM7L27N8-rE&ab_channel=Anjunadeep'
  },
  {
    name: 'Sub Focus & Wilkinson @ Corfe Castle',
    url: 'https://www.youtube.com/watch?v=TRh-amAhOEw&ab_channel=Mixmag'
  },
  {
    name: 'Delta Heavy @ Rampage 2022',
    url: 'https://www.youtube.com/watch?v=ghOdbnsFwFQ&t=90s&ab_channel=WeAreRampageEvents'
  },
  {
    name: 'Jason Ross @ EDC LV 2022',
    url: 'https://www.youtube.com/watch?v=FokLg160lN8&t=37s&ab_channel=JasonRoss'
  },
  {
    name: 'Fred again.. @ Boiler Room',
    url: 'https://www.youtube.com/watch?v=c0-hvjV2A5Y&ab_channel=BoilerRoom'
  },
  {
    name: 'SpongeBob Relaxing Music',
    url: 'https://www.youtube.com/watch?v=XWsptjpzBW0&t=2320s&ab_channel=giamoforti'
  },
];

export default function MusicPlayer() {
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentMusic, setCurrentMusic] = useState(playlist[0]);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  // console.log('Current Music', currentMusic);

  const findIndexByName = (song) => {
    if (playlist) {
      console.log('Finding current index by name: ', playlist.findIndex(playlistTrack => playlistTrack.name === song.name));
      return playlist.findIndex(playlistTrack => playlistTrack.name === song.name);
    };
  };

  const playback = () => {
    // If we aren't at 0 seconds, go to beginning of the track
    if (played !== 0) {
      return playerRef.current.seekTo(0);
    }

    // If there is no earlier track, 
    if (!playlist[findIndexByName(currentMusic) - 1]) {
      return null;
    }

    return setCurrentMusic(playlist[findIndexByName(currentMusic) - 1]);
  };

  const playForward = () => {
    // If there is no next track, restart from beginning
    if (!playlist[findIndexByName(currentMusic) + 1]) {
      return setCurrentMusic(playlist[0]);
    }

    return setCurrentMusic(playlist[findIndexByName(currentMusic) + 1]);
  };

  const handleProgress = (song) => {
    setPlayed(song.played);
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
        onProgress={handleProgress}
      />

      <div className={musicPlayerOpen ? 'music-player' : 'minimized'}>

        {musicPlayerOpen ? (
          <div>
            <IoCloseCircle onClick={() => setMusicPlayerOpen(false)} className="music-player-close" />
            <a className='music-title' href={currentMusic.url} target='_blank'>{currentMusic.name}</a>

            <ProgressBar now={played} min="0" max="1" className="progress-bar" visuallyHidden />

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
                class="slider" id="myRange" />

            </div>
          </div>
        ) : <IoMusicalNotes onClick={() => setMusicPlayerOpen(true)} className='music-player-opener' />}

      </div>

    </div>);

}