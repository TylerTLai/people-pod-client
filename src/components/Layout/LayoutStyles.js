import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-areas:
    'header header header'
    'sidebar main personInfo';
  & .main {
    grid-area: main;
  }
  & .header {
    grid-area: header;
  }
  & .personInfo {
    grid-area: personInfo;
  }
  & .sidebar {
    grid-area: sidebar;
  }
`;