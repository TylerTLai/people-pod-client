import styled from 'styled-components';
import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const StyledForm = styled.form`
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

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

export const StyledUploadInput = styled.input`
visibility: hidden`

export const StyledPic = styled.img`
  width: 35%;
  min-width: 120px;
  height: auto;
  display: flex;
  margin: auto;
  border-radius: 100%;
  cursor: pointer;
  /* box-shadow: 0px 19px 18px -10px rgba(0, 0, 0, 0.3); */
`;

export const customStyles = {
  control: (styles) => ({ ...styles, width: '300px' }),
  option: (styles) => ({ ...styles, width: '300px' }),
  menu: (styles) => ({ ...styles, width: '300px' }),
};

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

export const featherIconXCircleStyles = {
  cursor: 'pointer',
};

export const featherIconUploadStyles = {
  verticalAlign: 'bottom',
  marginRight: '.5rem',
};


// DropZone Styles
const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;

export const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

export const thumb = {
  display: 'grid',
  borderRadius: '5px',
  border: '1px solid #eaeaea',
  margin: 15,
  width: 150,
  height: 150,
  padding: '10px 10px 10px 15px',
  boxSizing: 'border-box',
};

export const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

export const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};