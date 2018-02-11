import React from 'react';
import TextField from './TextField';
import Button from './Button';

const FilterCard = (props) =>
  <div className="row">
    <div className="col-xs-3"><TextField id={"1"} cardId={props.id} save={props.save}
                                         text={props.filterValue1}/></div>
    <div className="col-xs-3"><TextField id={"2"} cardId={props.id} save={props.save}
                                         text={props.filterValue2}/></div>
    <div className="col-xs-3"><TextField id={"3"} cardId={props.id} save={props.save}
                                         text={props.filterValue3}/></div>
    <div className="col-xs-3"><Button icon="glyphicon glyphicon-remove" onClick={() => props.deleteFilters(props.id)}/>
    </div>
  </div>;

export default FilterCard;
