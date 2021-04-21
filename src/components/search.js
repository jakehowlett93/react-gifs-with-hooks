import React from 'react';

const Search = ({search}) => {

  const handleChange = (event) => {
    search(event.target.value)
  }

  return (
    <input type="text" className="form-search" onChange={handleChange} />
  );
}

export default Search;
