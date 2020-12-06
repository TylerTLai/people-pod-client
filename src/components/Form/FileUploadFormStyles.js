import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const StyledForm = styled.form`
  height: 100px;
  padding-top: 1rem;
`;

export const StyledFormTitle = styled.h2``;

export const StyledUploadInput = styled.input`
  visibility: hidden;
`;

export const StyledLabel = styled.label`
  background: ${(props) => props.background || `${colors.offWhite}`};
  color: ${(props) => props.color || `${colors.gray}`};
  font-size: ${(props) => props.fontSize || `${fontSizes.xs}`};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || '0.75rem 1.667rem'};
  border: ${(props) =>
    props.border ||
    `1px solid
    ${colors.lightGray}`};
  border-radius: ${(props) => props.borderRadius || '4px'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* transition: 0.3s ease-in-out; */
  &:hover,
  &:focus,
  &:active {
    /* background: ${colors.white}; */
    /* color: ${colors.black}; */
    cursor: pointer;
  }
`;

export const StyledButtonText = styled.span`
  vertical-align: bottom;
`;

export const featherIconUploadStyles = {
  verticalAlign: 'bottom',
  marginRight: '.5rem',
};

export const featherIconXCircleStyles = {
  cursor: 'pointer',
};
