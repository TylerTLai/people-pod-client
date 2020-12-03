import styled from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledContainer = styled(motion.div)`
  background: #eff4f7;
  height: 100vh;
  padding-bottom: 4.08rem;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const StyledTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
`;

export const StyledName = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
`;

export const StyledJob = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
`;

export const StyledLocation = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;
`;

export const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  /* grid-gap: 1rem; */
  /* margin-top: 1rem; */
  border: 1px solid red;
`;

export const StyledSection = styled.section`
  background-color: white;
  /* padding: 2rem; */
  /* margin: 0.5rem; */
  /* border-radius: 5px; */
  padding: 1rem 3rem;

  & p {
    color: #7c8097;
    line-height: 1.5;
  }
`;

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

export const StyledSummary = styled.div`
  background-color: white;
  padding: 3rem 3rem;
  /* margin: 0.5rem; */
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h3 {
    font-size: 2rem;
    text-align: center;
    margin: 1.2rem 0 0.4rem 0;
  }
  & p {
    color: #7c8097;
    text-align: center;
    margin: 0.8rem 0 0rem 0;
    line-height: 1.5;
  }
`;

export const StyledMetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 0;
  & p {
    text-align: center;
  }
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: 0;
  border-top: 1px solid white;
  margin: 0;
`;

export const StyledPic = styled.img`
  width: 120px;
  min-width: 120px;
  height: auto;
  display: flex;
  margin: auto;
  /* margin-bottom: .5rem; */
  border-radius: 100%;
  /* box-shadow: 0px 19px 18px -10px rgba(0, 0, 0, 0.3); */
`;

export const featherIconHeartFilledStyles = {
  fill: `${colors.red}`,
  color: `${colors.red}`,
  verticalAlign: 'bottom',
  marginRight: '.5rem',
};

export const featherIconHeartNotFilledStyles = {
  verticalAlign: 'bottom',
  marginRight: '.5rem',
  color: `${colors.spunPearl}`,
};

export const featherIconEditStyles = {
  verticalAlign: 'bottom',
  marginRight: '.5rem',
  color: `${colors.spunPearl}`,
};

export const featherIconDeleteStyles = {
  verticalAlign: 'bottom',
  marginRight: '.5rem',
  color: `${colors.spunPearl}`,
};
