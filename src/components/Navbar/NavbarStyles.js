import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledContainer = styled.div`
  background: ${colors.offWhite2};
  padding: 0.5rem 2rem;
  display: grid;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  align-items: center;
  grid-gap: 5rem;
  /* grid-template-columns: 188px 1100px 0.5fr; */
  grid-template-columns: 188px 2fr 0.5fr;
`;

export const StyledLogo = styled.div`
  & h2 {
    margin: 0;
    padding: 0;
    display: inline;
  }
`;

export const StyledAccount = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  display: inline-block;
  &:hover {
    color: ${colors.teal};
  }
`;
