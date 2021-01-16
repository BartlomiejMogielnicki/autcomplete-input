import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAutocomplete as fetchAutocompleteAction } from '../actions/index';

import Autocomplete from './Autocomplete';

const SearchForm = ({ usernameOptions, fetchAutocomplete }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchAutocomplete(username);
  }, [username, fetchAutocomplete]);

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
      <Autocomplete options={usernameOptions} match={username.length} />
    </div>
  );
};

SearchForm.propTypes = {
  usernameOptions: PropTypes.arrayOf(PropTypes.string),
  fetchAutocomplete: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  usernameOptions: [],
};

const mapStateToProps = ({ usernameOptions }) => {
  return { usernameOptions };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAutocomplete: (username) => dispatch(fetchAutocompleteAction(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
