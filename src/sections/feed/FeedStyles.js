import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledContainer = styled.main`
  background: ${colors.offWhite};
  height: 100vh;
  padding: 2rem 2rem 10rem 2rem;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const StyledButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'addPerson ... sort';
  & .addPerson {
    grid-area: addPerson;
  }
  & .sort {
    grid-area: sort;
  }
`;

export const StyledButtonText = styled.span`
  vertical-align: middle;
`;

export const featherIconUserPlusStyles = {
  verticalAlign: 'middle',
  marginRight: '.5rem',
};

export const featherIconChevronDownStyles = {
  verticalAlign: 'middle',
};
