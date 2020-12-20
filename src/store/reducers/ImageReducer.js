import { ADD_IMAGE, GET_IMAGE } from '../actions/imageTypes';

const initialState = {
  images: [],
  error: {},
  loading: true,
};

function image(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: action.payload,
        loading: false,
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

export default image;
