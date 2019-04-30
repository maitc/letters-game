import React from 'react';

import './Input.css';

function InputGame(props) {
  return (
    <input  value={props.value}
            onChange={props.onChange}
            className='input-game'
    />
  )
}

export default InputGame;