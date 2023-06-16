import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( { salute, subtitle } ) => {

  return (
		<>
			<h1> { salute } </h1>
      <p>{ subtitle }</p>
		</>
	);
}

FirstApp.propTypes = {
  salute: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
  subtitle: 'My first React app'
}

export default FirstApp;