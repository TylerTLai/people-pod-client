import { combineReducers } from 'redux';
import people from './PeopleReducer';
import group from './GroupReducer';

export default combineReducers({
  people,
  group,
});
