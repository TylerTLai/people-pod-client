import React, { useState } from 'react';
import { XCircle, Upload } from 'react-feather';
import { connect } from 'react-redux';
import axios from 'axios';

import * as Styles from './FileUploadFormStyles';
import { StyledButton } from '../../styles/Button/Button';

function FileUploadForm({ setModalInfo }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // loop through files
    for (const file of selectedFile) {
      formData.append('picture', file);
    }

    // post to server
    try {
      const res = await axios.post(
        'http://localhost:5000/api/upload/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('files uploaded ', res.data);
    } catch (err) {
      alert('File upload failed.');
      console.log('error ', err);
    }

    setModalInfo({
      show: false,
      modal: 'FileUpload',
    });
  };

  const handleChange = (e) => {
    setSelectedFile((prevState) => e.target.files);
  };

  const handleClose = () => {
    setModalInfo((prevState) => ({ ...prevState, show: false }));
  };

  return (
    <>
      <XCircle
        size={25}
        onClick={handleClose}
        style={Styles.featherIconXCircleStyles}
      />
      <Styles.StyledFormTitle>Add a picture</Styles.StyledFormTitle>
      <Styles.StyledForm onSubmit={handleSubmit} encType="multipart/form-data">
        <Styles.StyledLabel htmlFor="picture" placeholder="Add picture">
          <Upload size={16} style={Styles.featherIconUploadStyles} />
          <Styles.StyledButtonText>Choose a picture</Styles.StyledButtonText>
        </Styles.StyledLabel>
        <Styles.StyledUploadInput
          type="file"
          name="picture"
          multiple
          id="picture"
          onChange={handleChange}
        />
        <StyledButton margin="1rem 0" type="submit">
          Add picture
        </StyledButton>
      </Styles.StyledForm>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addGroup: (group) => dispatch(addGroup(group)),
//   };
// };

export default connect(null, null)(FileUploadForm);
