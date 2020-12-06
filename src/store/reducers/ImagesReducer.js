import { ADD_IMAGE, IMAGES_ERROR } from '../actions/imageTypes';

const initialState = [];

function images(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      console.log('image reducer payload ', action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default images;
