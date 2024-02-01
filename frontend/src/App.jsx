// /frontend/src/App.js
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import OverlayForm from './components/OverlayForm.jsx';

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <OverlayForm />
    </div>
  );
}

export default App;
