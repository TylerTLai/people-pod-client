import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../theme';

const { colors } = theme;

export const StyledDivider = styled(motion.hr)`
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.backgroundColor || `${colors.offWhite3}`};
  color: ${(props) => props.color || `${colors.offWhite3}`};
  border: ${(props) => props.border || 'none'};
  height: ${(props) => props.height || '1px'};
`;
