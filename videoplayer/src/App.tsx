import React from 'react';
import {VideoPlayer} from './Components/VideoPlayer/VideoPlayer';
import { MediaPlayer } from 'dashjs';
import { VideoPlayerProps } from './Components/VideoPlayer/types';

let url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
let url2 = "https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd";

const initialvideoPlayers: Array<VideoPlayerProps> = [
  {
    divId: "#MainPlayer", 
    url: url,
    player: MediaPlayer().create(),
    initialized: false
  },
  {
    divId: "#SecondaryPlayer", 
    url: url2,
    player: MediaPlayer().create(),
    initialized: false
  },

]

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>My Video Player App</h1>

      {initialvideoPlayers.map((player, index) => (
        <VideoPlayer 
          key = {index}
          videoPlayer = {player}
        />
      ))}
      
    </div>
  );
}

export default App;