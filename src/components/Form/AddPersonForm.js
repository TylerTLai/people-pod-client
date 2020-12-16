import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { XCircle } from 'react-feather';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import AsyncCreatableSelect from 'react-select/async-creatable';

import * as Styles from './AddPersonFormStyles';
import { addGroup } from '../../store/actions/groupActions';
import { addImage } from '../../store/actions/imageActions';
import { addPerson, updatePerson } from '../../store/actions/personActions';
import { getOptions } from '../../utils/AddPersonFormUtils';
import { StyledButton } from '../../styles/Button/Button';

function AddPersonForm({
  addImage,
  addGroup,
  addPerson,
  person,
  setModalInfo,
  updatePerson,
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
  const [files, setFiles] = useState([]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 3,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  const handleDelete = (file) => {
    const newFiles = [...files];
    newFiles.splice(file, 1);
    setFiles(newFiles);
  };

  const thumbs = files.map((file, index) => (
    <>
      <div style={Styles.thumb} key={file.name}>
        <XCircle
          size={15}
          onClick={(index) => handleDelete(index)}
          style={Styles.featherIconXCircleStyles}
        />
        <div style={Styles.thumbInner}>
          <img src={file.preview} style={Styles.img} alt="thumbnail" />
        </div>
      </div>
    </>
  ));

  const handleGroupChange = (inputValue) => {
    setFormGroup(inputValue !== null ? inputValue : []);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (personInfo, e) => {
    //  Get formData
    const formData = new FormData();

    for (const img of files) {
      formData.append('picture', img);
    }
    
    if (updateInfo) {
      updatePerson(personInfo, formGroup, personId);
      addGroup(formGroup);
      addImage(formData, personId);
    } else {
      addPerson(personInfo, formGroup, formData);
      addGroup(formGroup);
      addImage(formData);
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
      <Styles.StyledForm
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <Styles.StyledSectionContainer>
          <section>
            <h3 style={{ marginTop: 0, marginBottom: '2rem' }}>
              Upload a picture
            </h3>
            <Styles.Container
              {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
            >
              <input {...getInputProps()} type="file" name="picture" multiple />
              <p>
                Drag and drop some pictures here, or click in this box to select
                pictures (maximum of 3 pictures).
              </p>
            </Styles.Container>
            <br />

            <div>{thumbs}</div>
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

export default connect(null, { addPerson, addGroup, addImage, updatePerson })(
  AddPersonForm
);
