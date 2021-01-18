import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAutocomplete as fetchAutocompleteAction } from '../actions/index';
import styles from './SearchForm.module.css';

import Autocomplete from './Autocomplete';

const SearchForm = ({ usernameOptions, fetchAutocomplete }) => {
  const [username, setUsername] = useState('');
  const [hideOptions, setHideOptions] = useState(true);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === 40) {
      if (focusedOptionIndex === null) {
        setFocusedOptionIndex(0);
      } else if (focusedOptionIndex < usernameOptions.length) {
        setFocusedOptionIndex(focusedOptionIndex + 1);
      }
    }
    if (e.keyCode === 38) {
      if (
        focusedOptionIndex < usernameOptions.length &&
        focusedOptionIndex > 0
      ) {
        setFocusedOptionIndex(focusedOptionIndex - 1);
      }
    }
    if (e.keyCode === 13 && usernameOptions !== [] && !hideOptions) {
      e.preventDefault();
      setUsername(usernameOptions[focusedOptionIndex]);
      setHideOptions(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  useEffect(() => {
    if (!hideOptions) {
      fetchAutocomplete(username);
      setFocusedOptionIndex(null);
    }
  }, [username, fetchAutocomplete, hideOptions, setFocusedOptionIndex]);

  const setUserWithAutocomplete = (option) => {
    setHideOptions(true);
    setUsername(option);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === '') {
      alert('Please enter username');
      return;
    }
    alert('Form submitted with username ' + username);
    setHideOptions(true);
    setUsername('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleFormSubmit}>
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
          focusIndex={focusedOptionIndex}
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
