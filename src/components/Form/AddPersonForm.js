import React, { useState, useEffect } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { XCircle, Upload } from 'react-feather';

import * as Styles from './AddPersonFormStyles';
import { addGroup } from '../../store/actions/groupActions';
import { addPerson, updatePerson } from '../../store/actions/personActions';
import { StyledButton } from '../../styles/Button/Button';
import { getOptions } from '../../utils/AddPersonFormUtils';

function AddPersonForm({
  addPerson,
  addGroup,
  updatePerson,
  person,
  setModalInfo,
}) {
  useEffect(() => {
    // Checks if this form is being triggered by the personItem or by the 'add person' button.
    if (person === undefined) {
      return;
    } else {
      // triggered by personItem, so dispatch the update action instead of the add action.
      setUpdateInfo(true);
      // take the person id from person prop and set it to a local state as personId.
      setPersonId(person._id);
      // take the person prop and set it to a local state as formPerson.
      setFormPerson(person);
      // take the group prop and set it to a local state as formGroup.
      setFormGroup(
        person.group.map((groupObj) => ({
          label: groupObj.groupName,
          value: groupObj.groupName,
        }))
      );
    }
  }, [person]);

  const [formGroup, setFormGroup] = useState([]);
  const [formPerson, setFormPerson] = useState(person);
  const [personId, setPersonId] = useState('');
  const [updateInfo, setUpdateInfo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleGroupChange = (inputValue) => {
    console.log('what is inputValue', inputValue);
    setFormGroup(inputValue !== null ? inputValue : []);
  };

  const handlePictureChange = (e) => {
    setSelectedFile((prevState) => e.target.files);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (personInfo, e) => {
    if (updateInfo) {
      updatePerson(personInfo, formGroup, personId);
      addGroup(formGroup);
    } else {
      addPerson(personInfo, formGroup);
      addGroup(formGroup);
    }

    // upload images to server
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

    e.target.reset();

    setModalInfo((prevState) => ({
      ...prevState,
      show: false,
      modal: 'AddPerson',
    }));
  };

  const handleClose = () => {
    setModalInfo((prevState) => ({ ...prevState, show: false }));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <XCircle
        size={25}
        onClick={handleClose}
        style={Styles.featherIconXCircleStyles}
      />
      <h2>Add new person</h2>
      <Styles.StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Styles.StyledSectionContainer>
          <section>
          <h3 style={{marginTop: 0, marginBottom: '2rem'}}>Select a picture</h3>
            <Styles.StyledLabel htmlFor="picture" placeholder="Add picture">
              <Upload size={16} style={Styles.featherIconUploadStyles} />
              <Styles.StyledButtonText>
                Choose a picture
              </Styles.StyledButtonText>
            </Styles.StyledLabel>
            <Styles.StyledUploadInput
              type="file"
              name="picture"
              multiple
              id="picture"
              onChange={handlePictureChange}
            />
          </section>
          <section>
            <h3>Full Name</h3>
            <Styles.StyledInput
              type="input"
              name="fName"
              required
              ref={register}
              placeholder="First name"
              autoFocus
              value={formPerson ? formPerson.fName : ''}
              onChange={handleFieldChange}
            />
            <Styles.StyledInput
              type="input"
              name="lName"
              ref={register}
              placeholder="Last name"
              value={formPerson ? formPerson.lName : ''}
              onChange={handleFieldChange}
            />
          </section>
        </Styles.StyledSectionContainer>

        <section>
          <h3>Group</h3>

          <AsyncCreatableSelect
            onChange={handleGroupChange}
            isMulti
            defaultOptions
            loadOptions={getOptions}
            styles={Styles.customStyles}
            value={formGroup ? formGroup : undefined}
          />
        </section>

        <Styles.StyledSectionContainer>
          <section>
            <h3>Quick Note</h3>
            <Styles.StyledTextArea
              name="note"
              ref={register}
              placeholder="Write a quick note..."
              value={formPerson ? formPerson.note : ''}
              onChange={handleFieldChange}
            />
          </section>
        </Styles.StyledSectionContainer>

        <StyledButton type="submit">Done</StyledButton>
      </Styles.StyledForm>
    </>
  );
}

export default connect(null, { addPerson, addGroup, updatePerson })(
  AddPersonForm
);
