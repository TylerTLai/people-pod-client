export const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: 'linear', duration: 0.001 },
};

export const modalVariants = {
  hidden: {
    // y: '-100vh',
    scale: 0,
    opacity: 0,
    transition: { stiffness: 300 },
  },
  visiblePerson: {
    y: '20vh',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 10,
      mass: 0.1,
      stiffness: 300,
    },
  },
  visibleGroup: {
    y: '30vh',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 10,
      mass: 0.1,
      stiffness: 300,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
