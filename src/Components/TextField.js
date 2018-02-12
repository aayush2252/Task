import React from 'react';

const TextField = props =>
<div>
  <div className="form-group">
    <input type="text"
           className="form-control"
           id={props.id}
           onBlur={() => props.save(props.cardId)}
           onChange={(e) => props.text(e)}
    />
  </div>
</div>;

export default TextField;
