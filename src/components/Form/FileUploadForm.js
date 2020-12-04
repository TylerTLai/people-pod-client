import React from 'react';
import { XCircle } from 'react-feather';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import * as Styles from './AddGroupFormStyles';
import { StyledButton } from '../../styles/Button/Button';

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
      <XCircle size={25} onClick={handleClose} />
      <Styles.StyledForm
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <Styles.StyledInput
          type="file"
          placeholder="Upload an image"
          name="avatar"
          autoFocus
          required
          ref={register}
        />
        <StyledButton type="submit">Upload</StyledButton>
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
