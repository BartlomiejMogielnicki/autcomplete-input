import React from 'react';

const SearchForm = () => {
  return (
    <form action="">
      <label htmlFor="username">
        Username
        <input type="text" id="username" placeholder="Enter username" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
