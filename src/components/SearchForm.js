import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAutocomplete as fetchAutocompleteAction } from '../actions/index';

import Autocomplete from './Autocomplete';

const SearchForm = ({ usernameOptions, fetchAutocomplete }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchAutocomplete(username);
  }, [username]);

  return (
    <div>
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
      <Autocomplete options={usernameOptions} />
    </div>
  );
};

const mapStateToProps = ({ usernameOptions }) => {
  return { usernameOptions };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAutocomplete: (username) => dispatch(fetchAutocompleteAction(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
