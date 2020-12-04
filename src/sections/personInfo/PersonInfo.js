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

function PersonInfo({
  deletePerson,
  favoritePerson,
  favorite,
  person,
  setModalInfo,
}) {
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

  const showForm = (personObj, modal) => {
    setModalInfo((prevState) => ({
      show: !prevState.show,
      modal,
      person: personObj,
    }));
  };

  return (
    <>
      {person === null ? (
        <Styles.StyledContainer>
          <Styles.StyledTitleSection>
            <h2>PeoplePod</h2>
          </Styles.StyledTitleSection>
        </Styles.StyledContainer>
      ) : (
        <Styles.StyledContainer>
          <Styles.StyledSection style={{ paddingTop: '2rem', marginTop: '0' }}>
            <Styles.StyledPic
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg"
              onClick={() => showForm(null, 'FileUpload')}
            />
            <Styles.StyledName>
              {person.fName} {person.lName}
            </Styles.StyledName>
            <Styles.StyledJob>IRON MAN</Styles.StyledJob>
            <Styles.StyledLocation>California</Styles.StyledLocation>
            <Styles.StyledIcons>
              {fave ? (
                <StyledButton
                  margin=".2rem"
                  padding="0 .2rem"
                  width="35px"
                  height="35px"
                  border="none"
                  background="none"
                  onClick={handleFavorite}
                >
                  <Heart
                    size={20}
                    style={Styles.featherIconHeartFilledStyles}
                  />
                </StyledButton>
              ) : (
                <StyledButton
                  margin=".2rem"
                  padding="0 .2rem"
                  width="35px"
                  height="35px"
                  border="none"
                  background="none"
                  onClick={handleFavorite}
                >
                  <Heart
                    size={20}
                    style={Styles.featherIconHeartNotFilledStyles}
                  />
                </StyledButton>
              )}
              <StyledButton
                margin=".2rem"
                padding="0 .2rem"
                width="35px"
                height="35px"
                border="none"
                background="none"
                onClick={() => showForm(person, 'AddPerson')}
              >
                <Edit size={20} style={Styles.featherIconEditStyles} />
              </StyledButton>
              <StyledButton
                margin=".2rem"
                padding="0 .2rem"
                width="35px"
                height="35px"
                border="none"
                background="none"
                onClick={() => deletePerson(person._id)}
              >
                <Trash size={20} style={Styles.featherIconDeleteStyles} />
              </StyledButton>
            </Styles.StyledIcons>
          </Styles.StyledSection>
          <Styles.StyledSection>
            <Styles.StyledTitle>Note</Styles.StyledTitle>
            <Styles.StyledNote>{person.note}</Styles.StyledNote>
          </Styles.StyledSection>
          {/* // TODO: add contact and social media */}
          <Styles.StyledSection>
            <Styles.StyledTitle>Contact</Styles.StyledTitle>
          </Styles.StyledSection>
          <Styles.StyledSection>
            <Styles.StyledTitle>Social Media</Styles.StyledTitle>
          </Styles.StyledSection>
        </Styles.StyledContainer>
      )}
    </>
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
