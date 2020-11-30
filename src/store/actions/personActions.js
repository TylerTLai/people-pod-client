import {
  ADD_PERSON,
  DELETE_PERSON,
  UPDATE_PERSON,
  FILTER_PEOPLE,
  GET_PERSON,
  GET_PEOPLE,
  PERSON_ERROR,
  PEOPLE_ERROR,
} from './personTypes';

export const addPerson = () => {
  return {
    type: ADD_PERSON,
  };
};
export const deletePerson = () => {
  return {
    type: DELETE_PERSON,
  };
};
export const editPerson = () => {
  return {
    type: UPDATE_PERSON,
  };
};
