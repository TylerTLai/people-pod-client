import styled from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledContainer = styled(motion.div)`
  background-color: ${colors.offWhite};
  padding: 2rem 2rem 10rem 2rem;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const StyledSection = styled.section`
  background-color: white;
  padding: 1rem 3rem;
  margin-top: 20px;
  border-radius: 10px;
`;

export const StyledTitleSection = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2``;

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

export const StyledName = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1.5rem 0;
  
`;

export const StyledJob = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
  color: ${colors.spunPearl};
`;

export const StyledLocation = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
  color: ${colors.gray};
`;

export const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledNote = styled.p`
  color: #7c8097;
  line-height: 1.5;
`;

// TODO: Update StyledContact

export const StyledContact = styled.div`
  display: grid;
  grid-template-areas:
    'phoneIcon phoneLabel phone'
    'emailIcon emailLabel email'
    'addressIcon addressLabel address';
  & .phoneIcon {
    display: grid;
    grid-area: phoneIcon;
    align-items: center;
    justify-content: start;
    margin-top: 0.2rem;
  }
  & .phoneLabel {
    grid-area: phoneLabel;
  }
  & .phone {
    grid-area: phone;
  }
  & .emailIcon {
    display: grid;
    grid-area: emailIcon;
    align-items: center;
    justify-content: start;
    margin-top: 0.2rem;
  }
  & .emailLabel {
    grid-area: emailLabel;
  }
  & .email {
    grid-area: email;
  }
  & .addressIcon {
    grid-area: addressIcon;
    display: grid;
    align-items: center;
    justify-content: start;
    margin-top: 0.2rem;
  }
  & .addressLabel {
    grid-area: addressLabel;
  }
  & .address {
    grid-area: address;
  }
`;

export const featherIconHeartFilledStyles = {
  fill: `${colors.red}`,
  color: `${colors.red}`,
};

export const featherIconHeartNotFilledStyles = {
  color: `${colors.spunPearl}`,
};

export const featherIconEditStyles = {
  color: `${colors.spunPearl}`,
};

export const featherIconDeleteStyles = {
  color: `${colors.spunPearl}`,
};
