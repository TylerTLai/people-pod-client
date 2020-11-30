import React from 'react';
import FeatherIcon from 'feather-icons-react';

import * as Styles from './PersonItemStyles';
import { StyledButton } from '../../styles/Button/Button';

function PersonItem() {
  return (
    <Styles.StyledLink>
      <Styles.StyledContainer>
        <Styles.StyledContentArea>
          <div>
            <Styles.StyledPic src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg" />
          </div>
          <div>
            <Styles.StyledName>Name</Styles.StyledName>
            <Styles.StyledLocation>Location</Styles.StyledLocation>
            <Styles.StyledNote>Note</Styles.StyledNote>
          </div>
        </Styles.StyledContentArea>
        <Styles.StyledButtonsArea>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
          >
            favorite
          </StyledButton>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
          >
            edit
          </StyledButton>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
          >
            delete
          </StyledButton>
        </Styles.StyledButtonsArea>
      </Styles.StyledContainer>
    </Styles.StyledLink>
  );
}

export default PersonItem;
