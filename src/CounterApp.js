import React, { useState } from 'react';

const CounterApp = () => {

  const [ counter, setCounter ] = useState( 0 );

  const handleAdd = () => {
    setCounter( counter + 1 );
  }

  const handleRest = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter( counter * 0 );
  }

  return (
		<>
			<h1>CounterApp</h1>
			<h2> { counter } </h2>

			<button id="rest" onClick={ handleRest }> -1 </button>
			<button id="reset" onClick={ handleReset }> Reset Counter </button>
			<button id="add" onClick={ handleAdd }> +1	</button>
		</>
	);
}

export default CounterApp;