import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import EventComponent from './EventComponent';
import {SubmitButton} from '../Components';
import * as TodoActions from '../actions'


class FunnelCard extends Component{
  render({todos, actions} = this.props) {
    console.log(todos, actions);
    return(
      <div className="well">
        <button onClick={() => actions.addEvent()}>Add Funnel</button>
        {todos.map(e =>
          <EventComponent
            key={e.id} id={e.id}
            addFilter={actions.addFilters}
            filterValues={actions.filtersValue}
            deleteFunnel={actions.deleteEvent}
            deleteFilter={actions.deleteFilters}
            addEventValue={actions.addEventValue}
            data={todos}
          />
        )}
        <div><SubmitButton icon="glyphicon glyphicon-stats" text="Get JSON"/></div>
      </div>
    )
  }
}

FunnelCard.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunnelCard);
