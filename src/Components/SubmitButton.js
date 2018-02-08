import React from 'react';

const SubmitButton = (props) =>
<div>
    <button type="button" className="btn btn-default">
      <span className={props.icon}></span> {props.text}
    </button>
</div>

export default SubmitButton;
