import { motion } from 'framer-motion';
import styled from 'styled-components';

import theme from '../theme';

const { colors, fontSizes } = theme;

export const StyledButton = styled(motion.button)`
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
