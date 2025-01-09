
export const PNGAnimationDown = {
  hidden: { opacity: 0, transform: 'translateY(-60%)' },
  visible: {
    opacity: 1,
    transform: 'translateY(-50%)',
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

export const PNGAnimationUp = {
  hidden: { opacity: 0, transform: 'translateY(-40%)'},
  visible: {
    transform: 'translateY(-50%)',
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};