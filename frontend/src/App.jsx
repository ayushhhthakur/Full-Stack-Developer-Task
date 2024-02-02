// /frontend/src/App.js
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import OverlayForm from './components/OverlayForm.jsx';
import './App.css'
import OverlayList from './components/OverlayList.jsx';

function App() {
  return (
    <>
      <div className="App videoplayer overlayform">
        <VideoPlayer />
        <OverlayForm />
      </div>

      <div>
        <OverlayList />
      </div>
    </>
  );
}

export default App;
