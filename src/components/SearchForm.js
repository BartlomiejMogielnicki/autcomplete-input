import React, { useState, useEffect } from 'react';

import { fetchAutocomplete } from '../actions/index';

const SearchForm = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username.length > 0) {
      fetchAutocomplete(username);
    }
  });

  return (
    <form action="">
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
