import { combineReducers } from 'redux';

const getReducer = client => combineReducers({
  apollo: client.reducer(),
});

export default getReducer;

