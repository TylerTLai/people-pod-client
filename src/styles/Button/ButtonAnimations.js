import theme from '../theme';

const { colors } = theme;

export const buttonVariants = {
  hidden: {
    opacity: 0,
    background: `${colors.white}`,
    border: `1px solid ${colors.offWhite2}`,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  hover: {
    scale: 1.08,
    backgroundColor: `${colors.white}`,
    boxShadow: '0px 13px 15px -12px rgba(0, 0, 0, 0.3)',
    border: 0,
  },
};
