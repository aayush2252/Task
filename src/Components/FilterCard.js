import React from 'react';
import TextField from './TextField';
import Button from './Button';

const FilterCard = () =>
<div className="row">
  <div className="col-xs-3"><TextField/></div>
  <div className="col-xs-3"><TextField/></div>
  <div className="col-xs-3"><TextField/></div>
  <div className="col-xs-3"><Button icon="glyphicon glyphicon-remove"/></div>
</div>

export default FilterCard;
