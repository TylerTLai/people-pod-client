import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Heart, Edit, Trash } from 'react-feather';

import userPic from '../../assets/user-placeholder.jpg';

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
      // Set favorite
      const alreadyFaved = person.group.some(
        (el) => el.groupName === 'Favorite'
      );
      setFave(alreadyFaved);

      // Set pictures
      if (person.images !== null) {
        setUserPics(person.images);
      }
    }
  }, [person]);

  const [fave, setFave] = useState(false);
  const [userPics, setUserPics] = useState([]);

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

  const userPictures = person.images.map((img) => {
    if (img.filePath === '') {
      return (
        <Styles.StyledPic
          src={userPic}
          alt="user"
          // onClick={() => showForm(null, 'FileUpload')}
        />
      );
    } else {
      return (
        <Styles.StyledPic
          src={`http://localhost:5000/${img.filePath}`}
          alt="user"
          // onClick={() => showForm(null, 'FileUpload')}
        />
      );
    }
  });

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
            {userPictures}
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
    // images: state.uploads.images,
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
