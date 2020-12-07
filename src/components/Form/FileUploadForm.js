import React, { useState } from 'react';
import { XCircle, Upload } from 'react-feather';
import { connect } from 'react-redux';

import * as Styles from './FileUploadFormStyles';
import { addImage } from '../../store/actions/imageActions';
import { StyledButton } from '../../styles/Button/Button';

function FileUploadForm({ addImage, personId, setModalInfo }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // loop through files
    for (const file of selectedFile) {
      formData.append('picture', file);
    }

    // post to server
    addImage(formData, personId);

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

const mapStateToProps = (state) => {
  return {
    personId: state.people.person._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (image, id) => dispatch(addImage(image, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadForm);
