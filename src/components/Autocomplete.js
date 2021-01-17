import React from 'react';
import PropTypes from 'prop-types';
import styles from './Autocomplete.module.css';

const Autocomplete = ({ options, match, clicked }) => {
  return (
    <ul className={styles.wrapper}>
      {options.map((item) => (
        <li key={item} onClick={() => clicked(item)}>
          <strong>{item.substring(0, match)}</strong>
          {item.substring(match, item.length)}
        </li>
      ))}
    </ul>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  match: PropTypes.number.isRequired,
};

Autocomplete.defaultProps = {
  options: [],
};

export default Autocomplete;
