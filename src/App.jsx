import React from 'react';
import Home from './pages/Home';
import './App.css'; // Global styles

function App() {
  return (
    <div className="app-container">
      {/* The animated background is defined in App.css */}
      <div className="mesh-background" />
      <Home />
    </div>
  );
}

export default App;