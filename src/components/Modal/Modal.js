import React from 'react';

import { backdropVariants, modalVariants } from './ModalAnimations';
import * as Styles from './ModalStyles';

function Modal() {
  return (
    <Styles.StyledAnimatePresence exitBeforeEnter>
      <Styles.StyledBackdrop
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Styles.StyledContainer
          variants={modalVariants}
          //   animate={
          //     showModal.modal === 'AddPerson' ? 'visiblePerson' : 'visibleGroup'
          //   }
          exit="exit"
        >
          Add Person Form
        </Styles.StyledContainer>
      </Styles.StyledBackdrop>
    </Styles.StyledAnimatePresence>
  );
}

export default Modal;
