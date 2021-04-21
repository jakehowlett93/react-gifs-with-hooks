import React, { useState } from 'react';

import './App.css';
import Search from './components/search';
import Gif from './components/gif';
import GifList from './components/gif_list';

function App() {
  const [ gifList, setGifList ] = useState(["3LdNdcLDaPL8bK0ObS"])

  return (
    <div>
      <div className="left-scene">
        <Search />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} />
      </div>
    </div>
  );
}

export default App;
