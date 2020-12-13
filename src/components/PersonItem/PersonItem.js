import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Heart, Edit, Trash } from 'react-feather';

import * as Styles from './PersonItemStyles';
import userPic from '../../assets/user-placeholder.jpg';
import {
  deletePerson,
  getPerson,
  favoritePerson,
} from '../../store/actions/personActions';
import { StyledButton } from '../../styles/Button/Button';

function PersonItem({
  deletePerson,
  favorite,
  favoritePerson,
  getPerson,
  person,
  setModalInfo,
}) {
  useEffect(() => {
    const alreadyFaved = person.group.some((el) => el.groupName === 'Favorite');
    setFave(alreadyFaved);
  }, [person]);

  const [fave, setFave] = useState(false);

  const showForm = (person) => {
    setModalInfo((prevState) => ({
      show: !prevState.show,
      modal: 'AddPerson',
      person,
    }));
  };

  const handleFavorite = () => {
    favoritePerson(person._id);
    setFave(favorite);
  };

  const userPictures =
    person.images.length > 0 ? (
      person.images.map((img) => (
        <Styles.StyledPic
          src={`http://localhost:5000/uploads${img.filePath}`}
          alt="user"
          // onClick={() => showForm(null, 'FileUpload')}
        />
      ))
    ) : (
      <Styles.StyledPic
        src={userPic}
        alt="user"
        // onClick={() => showForm(null, 'FileUpload')}
      />
    );

  return (
    <Styles.StyledLink to={'/person/' + person._id}>
      <Styles.StyledContainer onClick={() => getPerson(person._id)}>
        <Styles.StyledContentArea>
          <div>{userPictures}</div>
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
              <Heart size={16} style={Styles.featherIconHeartFilledStyles} />
              <Styles.StyledButtonText>Favorite</Styles.StyledButtonText>
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
              <Heart size={16} style={Styles.featherIconHeartNotFilledStyles} />
              <Styles.StyledButtonText>Favorite</Styles.StyledButtonText>
            </StyledButton>
          )}
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

const mapStateToProps = (state) => {
  return {
    favorite: state.people.favorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoritePerson: (personId) => dispatch(favoritePerson(personId)),
    getPerson: (personId) => dispatch(getPerson(personId)),
    deletePerson: (personId) => dispatch(deletePerson(personId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonItem);
