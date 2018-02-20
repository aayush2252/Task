import {
  ADD_EVENT,
  ADD_EVENT_VALUE,
  ADD_FILTERS,
  DELETE_EVENT,
  DELETE_FILTERS,
  FILTERS_VALUE
} from '../Constants/ActionTypes'

const initialState = {
  data: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  
    case ADD_EVENT:
      const {data} = state;
      let prevId = 0;
      if (data.length === 0) {
        prevId = -1;
      } else if (data.length > 0) {
        prevId = data[data.length - 1].id;
      }
      const id = prevId + 1;
      data.push({
        id,
        text: '',
        filterArray: []
      });
      return {
        ...state,
        data
      };
      
    case DELETE_EVENT:
      return {
        ...state,
        data: state.data.filter(d => d.id !== action.id)
      };
  
    case ADD_FILTERS:
      // console.log("action in add filter", action);
      const {filterArray} = state.data[action.id];
      const filters = filterArray;
      let prevFilterId = 0;
      if (filterArray.length === 0) {
        prevFilterId = -1;
      } else if (filterArray.length > 0) {
        prevFilterId = filterArray[filterArray.length - 1].filterId;
      }
      const filterId = prevFilterId + 1;
      
      filters.push({
        filterId,
      });
      return {
        ...state,
      };
  
    case DELETE_FILTERS:
      // console.log(action, "delete filter");
      const item = state.data.map(d => {
        if (d.id === action.cardId) {
          return {
            ...d,
            filterArray: d.filterArray.filter(k => k.filterId !== action.id)
          }
        } else {
          return d
        }
      });
      // console.log('delete item', item);
      return {
        ...state,
        data: item
      };
      
    case ADD_EVENT_VALUE:
      const eventValue = state.data.map(d => {
        if (d.id === action.id) {
          return {
            ...d,
            text: action.value
          }
        } else {
          return d
        }
      });
      return {
        ...state,
        data: eventValue
      };
    
    case FILTERS_VALUE:
      // console.log("action in filter value", action);
      if (action.args.value1 !== "" && action.args.value2 !== "" && action.args.value3 !== "") {
        const filterValues = state.data.map(d => {
            if (d.id === action.cardId) {
              d.filterArray[action.id].text1 = action.args.value1;
              d.filterArray[action.id].text2 = action.args.value2;
              d.filterArray[action.id].text3 = action.args.value3;
              return {
                ...d
              }
            }
            return {
              ...d
            }
          }
        );
        return {
          ...state,
          data: filterValues
        };
      }
      return state;
    default:
      return state
  }
}
