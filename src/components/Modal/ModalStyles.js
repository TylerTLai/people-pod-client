import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

export const StyledAnimatePresence = styled(AnimatePresence)``;

export const StyledContainer = styled(motion.div)`
  max-width: 60vw;
  width: 300px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
`;

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
