import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [rtspUrl, setRtspUrl] = useState('your_rtsp_stream_url_here');

  // Ref to the ReactPlayer component
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleRtspUrlChange = (e) => {
    setRtspUrl(e.target.value);
  };

  return (
    <div>
      <label>
          RTSP URL:
          <input
            type="text"
            value={rtspUrl}
            onChange={handleRtspUrlChange}
          />
        </label>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
      <h2>Video Player</h2>
      <ReactPlayer
        ref={playerRef}
        url={rtspUrl}
        playing={playing}
        controls={true}
        volume={volume}
      />
      <div>
        <label>
          Volume:
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>
    </div>
  );
}

export default VideoPlayer;
