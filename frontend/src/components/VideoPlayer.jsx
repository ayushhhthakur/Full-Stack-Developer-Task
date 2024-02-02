// frontend/src/components/VideoPlayer.jsx

import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [rtspUrl, setRtspUrl] = useState('');

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

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const rangeInputStyle = {
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2>Video Player</h2>
      <label style={labelStyle}>
        RTSP URL:
        <input
          style={inputStyle}
          placeholder="Enter URL"
          type="text"
          value={rtspUrl}
          onChange={handleRtspUrlChange}
          required={true}
        />
      </label>
      <button style={buttonStyle} onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <ReactPlayer
        ref={playerRef}
        url={rtspUrl}
        playing={playing}
        controls={true}
        volume={volume}
      />
      {/* <div style={labelStyle}>
        <label>
          Volume:
          <input
            style={rangeInputStyle}
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div> */}
    </div>
  );
}

export default VideoPlayer;
