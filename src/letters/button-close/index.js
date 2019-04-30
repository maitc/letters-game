import React from 'react';

import './Button.css';

function ButtonClose(props) {
  return (
    <div onClick={props.onClick} className='close'>
        <p>{props.value}</p>
        <div className="img-close">
        <img src={require('../../utilities/img/button-close.jpg')} alt='close-button' />
        </div>
    </div>
  )
}

export default ButtonClose;