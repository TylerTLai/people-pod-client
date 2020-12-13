import axios from 'axios';
import { ADD_GROUP, GET_GROUPS, GET_GROUP, GROUPS_ERROR } from './groupTypes';

// Add one or more group(s)
export const addGroup = (newGroup) => async (dispatch) => {
  try {
    // console.log('from addGroup what is newGroup ', newGroup);

    // newGroup is an array of objects.
    const res = await axios.post(
      '/api/groups/add',
      newGroup
    );

    dispatch({
      type: ADD_GROUP,
      payload: res.data,
    });
  } catch (err) {
    console.log('catch error ', err);
    dispatch({
      type: GROUPS_ERROR,
      payload: 'addGroup error',
    });
  }
};

// Get all groups
export const getGroups = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/groups/');
    // console.log('from getGroups res ', res.data);
    dispatch({
      type: GET_GROUPS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GROUPS_ERROR,
      payload: 'error',
    });
  }
};

// Get one specific group
export const getGroup = (group) => async (dispatch) => {
  if (group === 'favorite') {
    try {
      const res = await axios.get('/api/groups/favorite');
      // console.log('from fav ', res.data[0]);

      dispatch({
        type: GET_GROUP,
        payload: res.data[0],
      });
    } catch (err) {
      dispatch({
        type: GROUPS_ERROR,
        payload: err,
      });
    }
  } else {
    try {
      const res = await axios.get(
        '/api/groups/' + group._id
      );
      dispatch({
        type: GET_GROUP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GROUPS_ERROR,
        payload: err,
      });
    }
  }
};
