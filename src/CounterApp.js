import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>

      <button id='rest'> -1 </button>
      <button id='add'> +1 </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};

export default CounterApp;