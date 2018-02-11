import React, {Component} from 'react';
import {Button, FilterCard, TextField} from '../Components';

class EventComponent extends Component {
  
  state = {
    eventValue: '',
    value1: '',
    value2: '',
    value3: '',
    ID: ''
  }
  addEventValue = (e) => {
    this.setState({
      eventValue: e.target.value,
    })
  }
  onSave = () => {
    const value = this.state.eventValue;
    this.props.addEventValue(value);
  }
  saveValues = (id) => {
    const args = {value1: this.state.value1, value2: this.state.value2, value3: this.state.value3}
    this.props.filterValues(args, id);
  }
  addFilterCard = () => {
    this.props.addFilter(this.props.id);
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
  }
  filterValue2 = (e) => {
    this.setState({
      value2: e.target.value,
      ID: e.target.id
    })
  }
  filterValue3 = (e) => {
    this.setState({
      value3: e.target.value,
      ID: e.target.id
    })
  }
  
  
  render() {
    const funnelId = this.props.data;
    console.log(this.props);
    const filterArray = funnelId.length > 0 ? funnelId[this.props.id].filterArray : [];
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
              <FilterCard key={id} id={id} save={this.saveValues}
                          filterValue1={this.filterValue1}
                          filterValue2={this.filterValue2}
                          filterValue3={this.filterValue3}
                          deleteFilters={this.deleteFilters}
              />)
            }
          </div>
          <div className="col-xs-1"><Button icon="glyphicon glyphicon-trash" onClick={this.deleteFilterCard}/></div>
        </div>
      </div>
    );
  }
}

export default EventComponent;
