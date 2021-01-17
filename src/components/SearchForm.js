import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAutocomplete as fetchAutocompleteAction } from '../actions/index';
import styles from './SearchForm.module.css';

import Autocomplete from './Autocomplete';

const SearchForm = ({ usernameOptions, fetchAutocomplete }) => {
  const [username, setUsername] = useState('');
  const [hideOptions, setHideOptions] = useState(false);

  useEffect(() => {
    if (!hideOptions) {
      fetchAutocomplete(username);
    }
  }, [username, fetchAutocomplete, hideOptions]);

  const setUserWithAutocomplete = (option) => {
    setHideOptions(true);
    setUsername(option);
  };

  return (
    <div className={styles.wrapper}>
      <form>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            autoComplete="off"
            value={username}
            onChange={(e) => {
              setHideOptions(false);
              setUsername(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {!hideOptions && (
        <Autocomplete
          options={usernameOptions}
          match={username.length}
          clicked={setUserWithAutocomplete}
        />
      )}
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
