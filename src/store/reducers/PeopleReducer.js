import {
  ADD_PERSON,
  FILTER_PEOPLE,
  DELETE_PERSON,
  UPDATE_PERSON,
  FAV_PERSON,
  GET_PERSON,
  GET_PEOPLE,
  // GET_GROUP,
  // PERSON_ERROR,
  // PEOPLE_ERROR,
  GET_FAVES,
} from '../actions/personTypes';

const initialState = {
  people: [],
  person: null,
  favorite: false,
  searchTerm: '',
  loading: true,
  error: {},
};

function people(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: [action.payload, ...state.people],
        loading: false,
      };

    case UPDATE_PERSON:
      // need to double check this, but it's working for now.
      // action.payload is a new person obj.

      return {
        ...state,
        person: action.payload,
        loading: false,
      };

    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((person) => person._id !== action.payload),
        loading: false,
      };

    case FILTER_PEOPLE:
      const { term, people } = action.payload;
      // Filter people by search term.
      const filteredPeople = people.filter((person) => {
        return (
          person.fName.toLowerCase().includes(term.toLowerCase()) ||
          person.lName.toLowerCase().includes(term.toLowerCase())
        );
      });
      return {
        ...state,
        people: filteredPeople,
        loading: false,
      };

    case FAV_PERSON:
      return { ...state, favorite: action.payload, loading: false };

    case GET_PEOPLE:
      return { ...state, people: action.payload, loading: false };

    case GET_PERSON:
      return { ...state, person: action.payload, loading: false };

    case GET_FAVES:
      return { ...state, people: action.payload, loading: false };

    default:
      return state;
  }
}

export default people;
