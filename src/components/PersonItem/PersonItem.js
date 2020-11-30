import React from 'react';
import { Heart, Edit, Trash } from 'react-feather';

import * as Styles from './PersonItemStyles';
import { StyledButton } from '../../styles/Button/Button';

function PersonItem({ setModalInfo }) {
  // const showForm = (person) => {
  //   setModalInfo((prevState) => ({
  //     show: !prevState.show,
  //     modal: 'AddPerson',
  //     person,
  //   }));
  // };

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
            <Heart size={16} style={Styles.featherIconHeartFilledStyles} />
            <Styles.StyledButtonText>Favorite</Styles.StyledButtonText>
          </StyledButton>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
          >
            <Edit size={16} style={Styles.featherIconEditStyles} />
            <Styles.StyledButtonText>Edit</Styles.StyledButtonText>
          </StyledButton>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
          >
            <Trash size={16} style={Styles.featherIconDeleteStyles} />
            <Styles.StyledButtonText>Delete</Styles.StyledButtonText>
          </StyledButton>
        </Styles.StyledButtonsArea>
      </Styles.StyledContainer>
    </Styles.StyledLink>
  );
}

export default PersonItem;
