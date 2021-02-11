import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <>
    <input type="text" value={search} onChange={onChange} ></input>
  </>
);
  
Search.propTypes = {
  search: PropTypes.string.isRequired,  
  onChange: PropTypes.func.isRequired
};

export default Search;

  




