import React from 'react';

import Gif from './gif';

const GifList = ({gifList}) => {

  const renderList = gifList.map(gifId => {
      return <Gif id={gifId} key={gifId} />
    })

  return (
    <div className="gif-list">
      {renderList}
    </div>
  );
}

export default GifList;
