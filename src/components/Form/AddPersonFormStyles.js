import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledTextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #c9d6df;
  border-radius: 3px;
  outline: none;
`;

export const StyledInput = styled.input`
  margin: 0.2rem 0;
  font-size: 1rem;
  height: 30px;
  width: 270px;
  padding: 0.15rem 0.8rem;
  border: 1px solid #c9d6df;
  border-radius: 3px;
  outline: none;
`;

export const customStyles = {
  control: (styles) => ({ ...styles, width: '300px' }),
  option: (styles) => ({ ...styles, width: '300px' }),
  menu: (styles) => ({ ...styles, width: '300px' }),
};
