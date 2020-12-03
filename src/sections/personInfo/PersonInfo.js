import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Heart, Edit, Trash } from 'react-feather';

import * as Styles from './PersonInfoStyles';
import { StyledButton } from '../../styles/Button/Button';

import {
  deletePerson,
  getPerson,
  favoritePerson,
} from '../../store/actions/personActions';

function PersonInfo({ deletePerson, favoritePerson, favorite, person }) {
  useEffect(() => {
    if (person !== null) {
      const alreadyFaved = person.group.some(
        (el) => el.groupName === 'Favorite'
      );
      setFave(alreadyFaved);
    }
  }, [person]);

  const [fave, setFave] = useState(false);

  const handleFavorite = () => {
    favoritePerson(person._id);
    setFave(favorite);
  };

  const showForm = () => {
    console.log('hello');
  };

  return (
    <Styles.StyledContainer>
      {person === null ? (
        <Styles.StyledTitle>PeoplePod</Styles.StyledTitle>
      ) : (
        <Styles.StyledContainer>
          <Styles.StyledSection>
            <Styles.StyledPic src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg" />
            <Styles.StyledName>
              {person.fName} {person.lName}
            </Styles.StyledName>
            <Styles.StyledJob>Iron Man</Styles.StyledJob>
            <Styles.StyledLocation>California</Styles.StyledLocation>
            <Styles.StyledIcons>
              {fave ? (
                <StyledButton
                  margin=".2rem"
                  padding="0 .2rem"
                  width="80px"
                  height="30px"
                  border="none"
                  background="none"
                  onClick={handleFavorite}
                >
                  <Heart
                    size={16}
                    style={Styles.featherIconHeartFilledStyles}
                  />
                </StyledButton>
              ) : (
                <StyledButton
                  margin=".2rem"
                  padding="0 .2rem"
                  width="80px"
                  height="30px"
                  border="none"
                  background="none"
                  onClick={handleFavorite}
                >
                  <Heart
                    size={16}
                    style={Styles.featherIconHeartNotFilledStyles}
                  />
                </StyledButton>
              )}
              {/* <p>Favorite</p> */}
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
                {/* <p>Edit</p> */}
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
                {/* <p>Delete</p> */}
              </StyledButton>
            </Styles.StyledIcons>
          </Styles.StyledSection>

          <p>{person.note}</p>
        </Styles.StyledContainer>
      )}
    </Styles.StyledContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    favorite: state.people.favorite,
    person: state.people.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoritePerson: (personId) => dispatch(favoritePerson(personId)),
    getPerson: (personId) => dispatch(getPerson(personId)),
    deletePerson: (personId) => dispatch(deletePerson(personId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonInfo);
