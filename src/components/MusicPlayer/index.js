import { useState } from 'react';
import { IoPlayBack, IoPlay, IoPlayForward, IoPause } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import './index.scss';

const playlist = [
  {
    name: 'Sub Focus & Wilkinson @ Corfe Castle',
    url: 'https://www.youtube.com/watch?v=TRh-amAhOEw&ab_channel=Mixmag'
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
    name: 'Delta Heavy @ Rampage 2022',
    url: 'https://www.youtube.com/watch?v=ghOdbnsFwFQ&t=90s&ab_channel=WeAreRampageEvents'
  },
  {
    name: 'Seven Lions @ Lake Kachess',
    url: 'https://www.youtube.com/watch?v=D7CaablOAY8&t=1101s&ab_channel=SEVENLIONSofficial'
  },
  {
    name: 'Jason Ross @ EDC LV 2022',
    url: 'https://www.youtube.com/watch?v=FokLg160lN8&t=37s&ab_channel=JasonRoss'
  },
  {
    name: 'SLANDER @ Long Beach Arena',
    url: 'https://www.youtube.com/watch?v=c_G7jPdx3OU&ab_channel=SLANDER'
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
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentMusic, setCurrentMusic] = useState(playlist[0]);

  console.log('Current Music line 50', currentMusic);

  const findIndexByName = (song) => {
    if (playlist) {
      console.log('Finding current index by name: ', playlist.findIndex(playlistTrack => playlistTrack.name === song.name));
      return playlist.findIndex(playlistTrack => playlistTrack.name === song.name);
    };
  };

  const playForward = () => {
    // console.log('currentMusic line 60', currentMusic);
    // If there is no next track, restart from beginning
    if (playlist[findIndexByName(currentMusic) + 1] === undefined) {
      // console.log('Next index is undefined. We should restart');
      return setCurrentMusic(playlist[0]);
    }

    return setCurrentMusic(playlist[findIndexByName(currentMusic) + 1]);
  };

  return (
    <div className='music-player-container'>
      <ReactPlayer
        className='react-player'
        url={currentMusic.url}
        width='0'
        height='0'
        playing={playing}
        volume={volume}
      />

      <div className='music-player'>
        <a className='music-title' href={currentMusic.url} target='_blank'>{currentMusic.name}</a>

        <div className='music-controls'>

          <IoPlayBack className='playback-button' />
          {playing ?
            <IoPause className='pause-button' onClick={() => setPlaying(false)} />
            : <IoPlay onClick={() => setPlaying(true)} className='play-button' />}

          <IoPlayForward onClick={playForward} className='playforward-button' />

          <input type="range" min="0" max="1" value={volume} onChange={e => setVolume(parseInt(e.target.value))} class="slider" id="myRange" />


        </div>
      </div>
    </div>);

}