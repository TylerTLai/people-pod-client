import React from 'react';
import Layout from '../../components/Layout/Layout';

import PeopleList from '../../components/PeopleList/PeopleList';
import { StyledButton } from '../../styles/Button/Button';
import { StyledDivider } from '../../styles/Divider/Divider';
import * as Styles from './FeedStyles';

function Feed({ setModalInfo }) {
  return (
    <Layout setModalInfo={setModalInfo}>
      <Styles.StyledContainer>
        <Styles.StyledButtonsContainer>
          <StyledButton padding={'.7rem 1rem'}>Add New Person</StyledButton>
        </Styles.StyledButtonsContainer>
        <StyledDivider margin="1.4rem 0 0 0" height="1px" />
        {/* list of people */}
        <PeopleList setModalInfo={setModalInfo} />
      </Styles.StyledContainer>
    </Layout>
  );
}

export default Feed;
