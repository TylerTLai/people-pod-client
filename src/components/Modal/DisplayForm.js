import AddGroupForm from '../Form/AddGroupForm';
import AddPersonForm from '../Form/AddPersonForm';
import FileUpload from '../Form/FileUploadForm';

export function displayForm(form, person, setModalInfo) {
  switch (form) {
    case 'FileUpload':
      return <FileUpload setModalInfo={setModalInfo} />;

    case 'AddPerson':
      return <AddPersonForm person={person} setModalInfo={setModalInfo} />;

    case 'AddGroup':
      return <AddGroupForm setModalInfo={setModalInfo} />;

    default:
      return;
  }
}
