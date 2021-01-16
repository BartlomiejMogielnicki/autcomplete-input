import React from 'react';

const Autocomplete = ({ options }) => {
  return (
    <ul>{options && options.map((item) => <li key={item}>{item}</li>)}</ul>
  );
};

export default Autocomplete;
