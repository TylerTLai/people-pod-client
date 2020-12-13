import { combineReducers } from 'redux';
import group from './GroupReducer';
import image from './ImageReducer';
import people from './PeopleReducer';

export default combineReducers({
  group,
  image,
  people,
});
