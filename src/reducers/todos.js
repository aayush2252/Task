import {
  ADD_EVENT,
  ADD_EVENT_VALUE,
  ADD_FILTERS,
  DELETE_EVENT,
  DELETE_FILTERS,
  FILTERS_VALUE
} from '../Constants/ActionTypes'

const initialState = [
  {
    id: 0,
    filterArray: []
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      console.log(state.length, "state");
    {
      if (state.length > 0) {
        return [
          ...state,
          {
            id: state[state.length - 1].id + 1,
            filterArray: []
          }
        ];
      }
      return [
        ...state,
        {
          id: 0,
          filterArray: []
        }
      ]
    }
    case DELETE_EVENT:
      console.log("inside delete event", state, action.id);
      return state.filter(todo =>
        todo.id !== action.id
      );
    case ADD_FILTERS:
      const value1 = '';
      const value2 = '';
      const value3 = '';
      const id = 0;
      return state.map(add =>
        add.id === action.id ?
          {
            id: action.id,
            filterArray: add.filterArray.concat([{id: add.filterArray.length, value1, value2, value3}])
          }
          :
          add
      );
    case DELETE_FILTERS:
      return state.map(remove =>
        remove.id === action.cardId ?
          {
            id: remove.id,
            filterArray: remove.filterArray.filter(val => val.id !== action.id)
          }
          :
          remove
      )
    case ADD_EVENT_VALUE:
      console.log("add event value", action.value);
    case FILTERS_VALUE:
      console.log("add filter values", action.args, action.id);
      if (action.args.value1 !== "" && action.args.value2 !== "" && action.args.value3 !== "") {
        return
      }
      return state;
    
    
    default:
      return state
  }
}
