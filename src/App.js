import React, { useState } from 'react';
import giphy from 'giphy-api';

import './App.css';
import Search from './components/search';
import Gif from './components/gif';
import GifList from './components/gif_list';

function App() {
  const [ gifList, setGifList ] = useState(["3LdNdcLDaPL8bK0ObS"])
  const [ selectedGif, setSelectedGif ] = useState(["3LdNdcLDaPL8bK0ObS"])

  const searchGifs = (value) => {
    const ids = [];
    giphy("9LtO6Ka1X6PP9yhQhm45g8H9nBK6Hyyo").search(value).then((result) => {
      result.data.forEach((gif) => {
        ids.push(gif.id);
      });
      setGifList(ids);
    });
  }

  const select = (id) => {
    setSelectedGif(id)
  }

  return (
    <div>
      <div className="left-scene">
        <Search search={searchGifs} />
        <div className="selected-gif">
          <Gif id={selectedGif} select={select} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} select={select} />
      </div>
    </div>
  );
}

export default App;
