import React, { Component }  from 'react';
import {TextField, Button, FilterCard} from '../Components';

class FunnelCard extends Component{

  state = {
    NumberOfFilters: 0,
  }

  addFilterCard = () => this.setState({NumberOfFilters : this.state.NumberOfFilters + 1});

  render(){
    console.log(this.state.NumberOfFilters);
    return(
      <div className="well row">
        <div className="row col-xs-11">
          <div className="col-xs-10">
            <TextField/>
          </div>
          <div className="col-xs-2">
            <Button icon="glyphicon glyphicon-filter" onClick={this.addFilterCard}/>
          </div>
          {}
          <div style={{marginLeft: '10%'}}><FilterCard/></div>
          <div style={{marginLeft: '10%'}}><FilterCard/></div>
        </div>
        <div className="col-xs-1"><Button icon="glyphicon glyphicon-trash"/></div>
      </div>
    );
  }
}

export default FunnelCard;
