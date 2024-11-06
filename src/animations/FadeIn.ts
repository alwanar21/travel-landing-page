import { Variants } from 'framer-motion';

const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  delay: number,
  length: number = 40
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction == 'up' ? length : direction == 'down' ? -length : 0,
      x: direction == 'left' ? length : direction == 'right' ? -length : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export { fadeIn };
