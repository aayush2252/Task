import React from 'react';

const Button = (props) =>
<div style={{borderRadius: '50%'}}>
  <button type="button" onClick={props.onClick} className="funnelcard__button btn btn-default btn-sm">
    <span className={props.icon}></span>
  </button>
</div>

export default Button;
