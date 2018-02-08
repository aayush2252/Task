import React, { Component }  from 'react';
import EventComponent from './EventComponent';
import {SubmitButton} from '../Components';

class FunnelCard extends Component{
  render(){
    return(
      <div className="well">
        <EventComponent/>
        <EventComponent/>
        <div><SubmitButton icon="glyphicon glyphicon-stats" text="Get JSON"/></div>
      </div>
    )
  }
}

export default FunnelCard;
