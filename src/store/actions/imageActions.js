import axios from 'axios';
import { ADD_IMAGE, IMAGES_ERROR } from './imageTypes';

// Add one or more image(s)
export const addImage = (newImage) => async (dispatch) => {
  try {
    console.log('addImage, newImage >>>', newImage);

    const res = await axios.post(
      'http://localhost:5000/api/upload/',
      newImage,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log('files uploaded ', res.data);

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
