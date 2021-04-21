import React from 'react';

const Gif = ({id}) => {

  const source = `https://media0.giphy.com/media/${id}/giphy.gif`;

  return (
    <img src={source} className="gif" alt="A gif" />
  );
}

export default Gif;
