import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledForm = styled.form`
  height: 100px;
  padding-top: 1rem;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  margin-bottom: 1rem;
  height: 30px;
  width: 270px;
  padding: 0.15rem 0.8rem;
  border: 1px solid ${colors.lightGray};
  border-radius: 3px;
  outline: none;
`;

export const featherIconXCircleStyles = {
  cursor: 'pointer',
};
