import React from 'react';

import './Box.css';

function BoxLetters(props) {
  return (
    <div className={props.className} onClick={props.click} onMouseDown={props.onmousedown} onMouseUp={props.onmouseup}>
        <p id={props.id}>{props.letter}</p>
    </div>
  )
}

export default BoxLetters;