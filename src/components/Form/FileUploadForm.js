import React from 'react';
import { XCircle, Upload } from 'react-feather';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import * as Styles from './FileUploadFormStyles';

function FileUploadForm({ setModalInfo }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    e.target.reset();

    setModalInfo({
      show: false,
      modal: 'FileUpload',
    });
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
      <Styles.StyledForm
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <Styles.StyledLabel htmlFor="profilePic" placeholder="Add picture">
          <Upload size={16} style={Styles.featherIconUploadStyles} />
          <Styles.StyledButtonText>Choose a picture</Styles.StyledButtonText>
        </Styles.StyledLabel>
        <Styles.StyledInput
          type="file"
          name="profilePic"
          id="profilePic"
          ref={register}
        />
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
