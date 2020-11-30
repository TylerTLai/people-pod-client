const initialState = [];

const GroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return state;
    default:
      return state;
  }
};

export default GroupReducer;
