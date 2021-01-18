import React from 'react';
import PropTypes from 'prop-types';
import styles from './Autocomplete.module.css';

const Autocomplete = ({ options, match, clicked, focusIndex }) => {
  return (
    <ul className={styles.wrapper}>
      {options.map((item, index) => (
        <li
          key={item}
          onClick={() => clicked(item)}
          className={index === focusIndex ? styles.focus : null}
        >
          <strong>{item.substring(0, match)}</strong>
          {item.substring(match, item.length)}
        </li>
      ))}
    </ul>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  match: PropTypes.number,
  clicked: PropTypes.func.isRequired,
  focusIndex: PropTypes.number,
};

Autocomplete.defaultProps = {
  options: [],
  match: null,
  focusIndex: null,
};

export default Autocomplete;
