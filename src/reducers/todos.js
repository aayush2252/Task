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
}

export default function todos(state = initialState, action) {
  switch (action.type) {
  
    case ADD_EVENT:
      const {data} = state;
      const id = data.length;
      data.push({
        id,
        text: '',
        filterArray: []
      });
      return {
        ...state,
        data
      }
      
    case DELETE_EVENT:
      return {
        ...state,
        data: state.data.filter(d => d.id !== action.id)
      }
  
    case ADD_FILTERS:
      const {filterArray} = state.data[action.id];
      const filters = filterArray;
      const filterId = filterArray.length;
      
      filters.push({
        filterId,
      });
      return {
        ...state,
      };
  
    case DELETE_FILTERS:
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
