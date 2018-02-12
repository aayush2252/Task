import * as types from '../Constants/ActionTypes'

export const addEvent = () => ({type: types.ADD_EVENT});
export const addEventValue = (value, id) => ({type: types.ADD_EVENT_VALUE, value, id});
export const deleteEvent = id => ({type: types.DELETE_EVENT, id});
export const addFilters = id => ({type: types.ADD_FILTERS, id});
export const deleteFilters = (id, cardId) => ({type: types.DELETE_FILTERS, id, cardId});
export const filtersValue = (args, id, cardId) => ({type: types.FILTERS_VALUE, args, id, cardId});
