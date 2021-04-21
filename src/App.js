import React, { useState } from 'react';

import './App.css';
import Search from './components/search';
import Gif from './components/gif';

function App() {
  return (
    <div>
      <div className="left-scene">
        <Search />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene"></div>
    </div>
  );
}

export default App;
