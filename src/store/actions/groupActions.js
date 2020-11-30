import { ADD_GROUP, GET_GROUPS, GET_GROUP, GROUPS_ERROR } from './groupTypes';

export const addGroup = () => {
  return {
    type: ADD_GROUP,
  };
};

export const getGroups = () => {
  return {
    type: GET_GROUPS,
  };
};

export const getGroup = () => {
  return {
    type: GET_GROUP,
  };
};

export const groupsError = () => {
  return {
    type: GROUPS_ERROR,
  };
};
