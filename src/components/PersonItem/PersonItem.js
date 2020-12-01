import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Heart, Edit, Trash } from 'react-feather';

import * as Styles from './PersonItemStyles';
import { deletePerson, getPerson } from '../../store/actions/personActions';
import { StyledButton } from '../../styles/Button/Button';
// import { PERSON_ERROR } from '../../store/actions/personTypes';

function PersonItem({ deletePerson, getPerson, person, setModalInfo }) {
  useEffect(() => {
    const alreadyFaved = person.group.some((el) => el.groupName === 'Favorite');
    setFave(alreadyFaved);
  }, [person]);

  const [fave, setFave] = useState(false);

  const favoritePerson = (personId) => {
    axios
      .put('/api/people/favorite/' + personId)
      .then((res) => setFave(res.data.favorited));
  };

  const showForm = (person) => {
    setModalInfo((prevState) => ({
      show: !prevState.show,
      modal: 'AddPerson',
      person,
    }));
  };

  return (
    <Styles.StyledLink to={'/person/' + person._id}>
      <Styles.StyledContainer>
        <Styles.StyledContentArea>
          <div>
            <Styles.StyledPic src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg" />
          </div>
          <div>
            <Styles.StyledName>{`${person.fName} ${person.lName}`}</Styles.StyledName>
            <Styles.StyledLocation>Location</Styles.StyledLocation>
            <Styles.StyledNote>
              {person.note.length >= 130
                ? person.note.slice(0, 130) + '...'
                : person.note}
            </Styles.StyledNote>
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
            {fave ? (
              <Heart
                size={16}
                style={Styles.featherIconHeartFilledStyles}
                onClick={() => favoritePerson(person._id)}
              />
            ) : (
              <Heart
                size={16}
                style={Styles.featherIconHeartNotFilledStyles}
                onClick={() => favoritePerson(person._id)}
              />
            )}

            <Styles.StyledButtonText>Favorite</Styles.StyledButtonText>
          </StyledButton>
          <StyledButton
            margin=".2rem"
            padding="0 .2rem"
            width="80px"
            height="30px"
            border="none"
            background="none"
            onClick={() => showForm(person)}
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
            onClick={() => deletePerson(person._id)}
          >
            <Trash size={16} style={Styles.featherIconDeleteStyles} />
            <Styles.StyledButtonText>Delete</Styles.StyledButtonText>
          </StyledButton>
        </Styles.StyledButtonsArea>
      </Styles.StyledContainer>
    </Styles.StyledLink>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPerson: (personId) => dispatch(getPerson(personId)),
    deletePerson: (personId) => dispatch(deletePerson(personId)),
  };
};

export default connect(null, mapDispatchToProps)(PersonItem);
