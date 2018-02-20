import React, {Component} from 'react';
import {Button, FilterCard, TextField} from '../Components';

class EventComponent extends Component {
  
  state = {
    eventValue: '',
    value1: '',
    value2: '',
    value3: '',
    ID: ''
  };
  
  addEventValue = (e) => {
    this.setState({
      eventValue: e.target.value,
    })
  };
  
  onSave = () => {
    const value = this.state.eventValue;
    this.props.addEventValue(value, this.props.id);
  };
  
  saveValues = (id) => {
    const args = {value1: this.state.value1, value2: this.state.value2, value3: this.state.value3};
    if (this.state.value3 !== '') {
      this.props.filterValues(args, id, this.props.id);
    }
  };
  
  addFilterCard = () => {
    this.props.addFilter(this.props.keyValue);
  };
  
  deleteFilterCard = () => {
    this.props.deleteFunnel(this.props.id);
  };
  
  deleteFilters = (id) => {
    this.props.deleteFilter(id, this.props.id);
  };
  
  filterValue1 = (e) => {
    this.setState({
      value1: e.target.value,
      ID: e.target.id
    })
  };
  
  filterValue2 = (e) => {
    this.setState({
      value2: e.target.value,
      ID: e.target.id
    })
  };
  
  filterValue3 = (e) => {
    this.setState({
      value3: e.target.value,
      ID: e.target.id
    })
  };
  
  render() {
    const funnelId = this.props.data;
    // console.log(funnelId, "arrayValue:", this.props.keyValue, "uni id", this.props.id, 'funnelId');
    const filterArray = funnelId.length > 0 ? funnelId[this.props.keyValue].filterArray : [];
    const mapArray = filterArray.length >= 0 ? filterArray : [];
    
    return(
      <div className="well row">
        <div className="row col-xs-11">
          <div className="col-xs-10">
            <TextField id={this.props.id} text={this.addEventValue} save={this.onSave}/>
          </div>
          <div className="col-xs-2">
            <Button icon="glyphicon glyphicon-filter" onClick={this.addFilterCard}/>
          </div>
          <div style={{marginLeft: '10%'}}>
            {mapArray.map((e, id) =>
                <FilterCard
                  key={e.filterId} keyValue={e.filterId} id={e.filterId} save={this.saveValues}
                filterValue1={this.filterValue1}
                filterValue2={this.filterValue2}
                filterValue3={this.filterValue3}
                deleteFilters={this.deleteFilters}
              />
              )
            }
          </div>
          <div className="col-xs-1">
            <Button icon="glyphicon glyphicon-trash" onClick={this.deleteFilterCard}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EventComponent;
