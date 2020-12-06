import { combineReducers } from 'redux';
import group from './GroupReducer';
import image from './ImagesReducer';
import people from './PeopleReducer';

export default combineReducers({
  group,
  image,
  people,
});
