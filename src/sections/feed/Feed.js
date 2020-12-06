import React from 'react';
import { UserPlus, ChevronDown } from 'react-feather';

import Layout from '../../components/Layout/Layout';
import PeopleList from '../../components/PeopleList/PeopleList';
import { StyledButton } from '../../styles/Button/Button';
import { StyledDivider } from '../../styles/Divider/Divider';
import * as Styles from './FeedStyles';

function Feed({ setModalInfo }) {
  const handleAddPerson = () => {
    setModalInfo((prevState) => ({
      show: !prevState.show,
      modal: 'AddPerson',
    }));
  };

  return (
    <Layout setModalInfo={setModalInfo}>
      <Styles.StyledContainer>
        <Styles.StyledButtonsContainer className="addPerson">
          <StyledButton padding={'.7rem 1rem'} onClick={handleAddPerson}>
            <UserPlus size={16} style={Styles.featherIconUserPlusStyles} />
            <Styles.StyledButtonText>Add new person</Styles.StyledButtonText>
          </StyledButton>
          {/* // TODO: add sort feature */}
          <StyledButton padding={`.2rem .7rem`} className="sort">
            <ChevronDown
              size={16}
              style={Styles.featherIconChevronDownStyles}
            />
          </StyledButton>
        </Styles.StyledButtonsContainer>
        <StyledDivider margin="1.4rem 0 0 0" height="1px" />
        {/* list of people */}
        <PeopleList setModalInfo={setModalInfo} />
      </Styles.StyledContainer>
    </Layout>
  );
}

export default Feed;
