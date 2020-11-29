import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledContainer = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${colors.black};
  padding: 1.7rem 0rem 10rem 0rem;
  color: ${colors.white};
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const StyledGroupHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: ${colors.offWhite};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin: 0.2rem 0;
  padding: 0.8rem 2rem;
  transition: 0.2s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.transparentGray};
    color: ${colors.white};
  }
`;
