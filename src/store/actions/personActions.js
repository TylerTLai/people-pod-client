import axios from 'axios';

import {
  ADD_PERSON,
  DELETE_PERSON,
  UPDATE_PERSON,
  FILTER_PEOPLE,
  FAV_PERSON,
  GET_PERSON,
  GET_PEOPLE,
  PERSON_ERROR,
  PEOPLE_ERROR,
} from './personTypes';

// Get a person
export const getPerson = (id) => async (dispatch) => {
  // console.log('from getPerson action', id);
  try {
    const res = await axios.get(`/api/people/person/${id}`);
    // console.log(res.data);
    dispatch({
      type: GET_PERSON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all people
export const getPeople = (groupId) => async (dispatch) => {
  try {
    if (!groupId) {
      const res = await axios.get(`/api/people/`);

      dispatch({
        type: GET_PEOPLE,
        payload: res.data,
      });
    } else {
      const groupSlug = '/' + groupId;
      const res = await axios.get(`/api/people/group${groupSlug}`);

      dispatch({
        type: GET_PEOPLE,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: PEOPLE_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add a person
export const addPerson = (person, group, images) => async (dispatch) => {
  console.log('addPerson actions >>> ', person);
  console.log('addPerson actions >>> ', group);
  console.log(
    'addPerson actions images >>> ',
    JSON.stringify(Object.fromEntries(images))
  );

  try {
    // const res = await axios.post('/api/people/add', { person, group, images });

    const res = await axios.post('/api/people/add', images, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        person,
        group,
      },
    });
    // console.log('what is the server res ', res.data);

    dispatch({
      type: ADD_PERSON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
    });
  }
};

// Delete a person
export const deletePerson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/people/person/${id}`);

    dispatch({
      type: DELETE_PERSON,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update a person
export const updatePerson = (person, group, personId) => async (dispatch) => {
  // console.log('from update person ', group);

  try {
    const res = await axios.put(`/api/people/update/${personId}`, {
      person,
      group,
      personId,
    });
    // console.log('updatePerson res from server ', res.data)

    dispatch({
      type: UPDATE_PERSON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
    });
  }
};

// Filter people
export const filterPeople = (term) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/people/`);
    const termPeople = { term, people: res.data };

    dispatch({
      type: FILTER_PEOPLE,
      payload: termPeople,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
    });
  }
};

// Favorite a person
export const favoritePerson = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/people/favorite/${id}`);

    dispatch({
      type: FAV_PERSON,
      payload: res.data.favorited,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
    });
  }
};
