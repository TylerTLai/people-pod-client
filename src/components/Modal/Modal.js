import React from 'react';

import { displayForm } from './DisplayForm';
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
            {displayForm(modalInfo.modal, modalInfo.person, setModalInfo)}
          </Styles.StyledContainer>
        </Styles.StyledBackdrop>
      )}
    </Styles.StyledAnimatePresence>
  );
}

export default Modal;
