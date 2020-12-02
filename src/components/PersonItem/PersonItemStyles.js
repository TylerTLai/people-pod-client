import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors } = theme;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const StyledContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 2fr;
  grid-template-rows: auto 50px;
  align-items: center;
  border-radius: 5px;
  background: ${colors.white};
  border: 1px solid ${colors.offWhite2};
  padding: 1rem 2rem 0.5rem 2rem;
  grid-template-areas:
    'contentArea contentArea'
    'buttonsArea buttonsArea';
`;

export const StyledPic = styled.img`
  margin: 0 auto;
  border-radius: 5px;
  width: 100px;
  height: auto;
`;

export const StyledContentArea = styled.div`
  grid-area: contentArea;
  align-items: flex-start;
  display: grid;
  grid-template-columns: 132px auto;
`;

export const StyledButtonsArea = styled.div`
  grid-area: buttonsArea;
  display: grid;
  grid-template-columns: 110px 1fr auto;
  justify-items: left;
  align-self: flex-end;
`;

export const StyledName = styled.h2`
  margin: 0;
`;

export const StyledLocation = styled.p`
  margin-top: 7px;
  color: ${colors.spunPearl};
`;

export const StyledNote = styled.p`
  color: ${colors.gray};
`;

export const StyledButtonText = styled.span`
  vertical-align: bottom;
  color: ${colors.spunPearl};
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
