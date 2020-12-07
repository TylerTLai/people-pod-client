import { ADD_IMAGE, GET_IMAGE, IMAGES_ERROR } from '../actions/imageTypes';

const initialState = {
  images: [],
  error: {},
  loading: true
};

function uploads(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: action.payload,
        loading: false
      };

    case GET_IMAGE:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
}

export default uploads;
