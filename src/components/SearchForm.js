import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAutocomplete as fetchAutocompleteAction } from '../actions/index';

const SearchForm = ({ usernameOptions, fetchAutocomplete }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username.length > 0) {
      fetchAutocomplete(username);
    }
  }, [username]);

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

const mapStateToProps = ({ usernameOptions }) => {
  return { usernameOptions };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAutocomplete: (username) => dispatch(fetchAutocompleteAction(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
