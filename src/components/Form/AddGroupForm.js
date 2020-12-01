import React from 'react';
import { XCircle } from 'react-feather';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import * as Styles from './AddGroupFormStyles';
import { addGroup } from '../../store/actions/groupActions';
import { StyledButton } from '../../styles/Button/Button';

function AddGroupForm({ setModalInfo, addGroup }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (group, e) => {
    addGroup(group.groupName);

    e.target.reset();

    setModalInfo({
      show: false,
      modal: '',
    });
  };

  const handleClose = () => {
    setModalInfo((prevState) => ({ ...prevState, show: false }));
  };

  return (
    <>
      <XCircle size={25} onClick={handleClose} />
      <Styles.StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Styles.StyledInput
          type="text"
          placeholder="Enter group name"
          name="groupName"
          autoFocus
          ref={register}
        />
        <StyledButton type="submit">Done</StyledButton>
      </Styles.StyledForm>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroup: (group) => dispatch(addGroup(group)),
  };
};

export default connect(null, mapDispatchToProps)(AddGroupForm);
