import React from 'react';

const Gif = ({id, select}) => {

  const handleClick = () => {
    select(id)
  }

  const source = `https://media0.giphy.com/media/${id}/giphy.gif`;

  return (
    <img src={source} className="gif" alt="A gif" onClick={handleClick} />
  );
}

export default Gif;
