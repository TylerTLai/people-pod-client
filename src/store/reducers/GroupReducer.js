import { ADD_GROUP, GET_GROUP, GET_GROUPS } from '../actions/groupTypes';

const initialState = {
  groups: [],
  group: null,
  loading: true,
  error: {},
};

function group (state = initialState, action) {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...action.payload, ...state.groups],
        loading: false,
      };

    case GET_GROUPS:
      return { ...state, groups: action.payload, loading: false };

    case GET_GROUP:
      return { ...state, group: action.payload, loading: false };

    default:
      return state;
  }
}

export default group