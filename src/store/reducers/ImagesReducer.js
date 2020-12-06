import { ADD_IMAGE, GET_IMAGE, IMAGES_ERROR } from '../actions/imageTypes';

const initialState = null;

function images(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return state;
    case GET_IMAGE:
      return action.payload;
    default:
      return state;
  }
}

export default images;
