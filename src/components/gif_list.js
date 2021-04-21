import React from 'react';

import Gif from './gif';

const GifList = ({gifList}) => {

  return (
    gifList.map(gifId => {
      <Gif id={gifId} />
    })
  );
}

export default GifList;
