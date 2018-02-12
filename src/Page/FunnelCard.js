import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {SubmitButton} from '../Components';
import * as TodoActions from '../actions'
import EventComponent from "./EventComponent";


class FunnelCard extends Component{
  state = {
    getJson: false,
  };
  
  getJSON = () => this.setState({getJson: true});
  
  render() {
    const {todos, actions} = this.props;
    console.log(todos.data);
    if (this.state.getJson) {
      return (
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      )
    }
    return(
      <div className="well">
        <button onClick={() => actions.addEvent()}>Add Funnel</button>
        {todos.data.map((e, id) =>
          <EventComponent
            key={id} id={e.id}
            keyValue={id}
            addFilter={actions.addFilters}
            filterValues={actions.filtersValue}
            deleteFunnel={actions.deleteEvent}
            deleteFilter={actions.deleteFilters}
            addEventValue={actions.addEventValue}
            data={todos.data}
          />
        )}
        <div>
          <SubmitButton onClick={this.getJSON} icon="glyphicon glyphicon-stats" text="Get JSON"/>
        </div>
      </div>
    )
  }
}

// FunnelCard.propTypes = {
//   todos: PropTypes.shape({
//     data: PropTypes.arrayOf().isRequired
//   }).isRequired,
//   actions: PropTypes.object.isRequired
// };

const mapStateToProps = state => {
  const {todos} = state;
  return {
    todos
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunnelCard);
