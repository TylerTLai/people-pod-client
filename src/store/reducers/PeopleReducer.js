const initialState = [];

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return state;
    default:
      return state;
  }
};

export default PeopleReducer;
