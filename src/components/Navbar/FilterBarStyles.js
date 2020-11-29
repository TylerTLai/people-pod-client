import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const StyledForm = styled.form`
  display: flex;
`;

export const StyledFilter = styled.input`
  font-size: ${fontSizes.sm};
  height: 40px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  padding: 0.15rem 0.8rem;
  border: 1px solid ${colors.lightGray};
  border-right: none;
  border-radius: 3px 0 3px 3px;
  outline: none;
`;