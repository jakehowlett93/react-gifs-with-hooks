import React from 'react';

import Gif from './gif';

const GifList = ({gifList, select}) => {

  const renderList = gifList.map(gifId => {
      return <Gif id={gifId} key={gifId} select={select} />
    })

  return (
    <div className="gif-list">
      {renderList}
    </div>
  );
}

export default GifList;
