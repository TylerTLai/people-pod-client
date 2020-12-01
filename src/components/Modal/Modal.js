import React from 'react';

import AddGroupForm from '../Form/AddGroupForm';
import AddPersonForm from '../Form/AddPersonForm';
import { backdropVariants, modalVariants } from './ModalAnimations';
import * as Styles from './ModalStyles';

function Modal({ modalInfo, setModalInfo }) {
  return (
    <Styles.StyledAnimatePresence exitBeforeEnter>
      {modalInfo.show === true && (
        <Styles.StyledBackdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Styles.StyledContainer
            variants={modalVariants}
            animate={
              modalInfo.modal === 'AddPerson' ? 'visiblePerson' : 'visibleGroup'
            }
            exit="exit"
          >
            {modalInfo.modal === 'AddPerson' ? (
              <AddPersonForm
                person={modalInfo.person}
                setModalInfo={setModalInfo}
              />
            ) : (
              <AddGroupForm setModalInfo={setModalInfo} />
            )}
          </Styles.StyledContainer>
        </Styles.StyledBackdrop>
      )}
    </Styles.StyledAnimatePresence>
  );
}

export default Modal;
