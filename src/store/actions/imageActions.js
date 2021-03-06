import axios from 'axios';
import { ADD_IMAGE, GET_IMAGE, IMAGES_ERROR } from './imageTypes';

// Add one or more image(s)
export const addImage = (newImage, personId) => async (dispatch) => {
  const newId = personId ? personId : '';
  try {
    const res = await axios.post(`/api/images/upload/${newId}`, newImage, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({
      type: ADD_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log('catch error ', err);
    dispatch({
      type: IMAGES_ERROR,
      payload: 'addImage error',
    });
  }
};

export const getImage = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/images/');
    // console.log('getimage response ', res.data);
    dispatch({
      type: GET_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log('catch error ', err);
    dispatch({
      type: IMAGES_ERROR,
      payload: 'getImage error',
    });
  }
};
