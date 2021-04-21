import React from 'react';

const Gif = () => {

  const source = `https://media0.giphy.com/media/3LdNdcLDaPL8bK0ObS/giphy.gif`;

  return (
    <img src={source} className="gif" alt="A gif" />
  );
}

export default Gif;
