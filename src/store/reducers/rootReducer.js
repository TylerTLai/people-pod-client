import { combineReducers } from 'redux';
import group from './GroupReducer';
import uploads from './UploadsReducer';
import people from './PeopleReducer';

export default combineReducers({
  group,
  uploads,
  people,
});
