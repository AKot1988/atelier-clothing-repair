'use client'

import { FC } from 'react';
// import { PNGAnimationDown, PNGAnimationUp } from '@/motion/animation';
import { AnimatedPNGprops } from './helper';
import { motion } from 'framer-motion';


const AnimatedPNG: FC<AnimatedPNGprops> = ({
  initial,
  whileInView,
  variants,
  className,
  src,
  alt,
}) => {
  return (
    <motion.img
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
      src={src}
      alt={alt}
      />
  )
}

export default AnimatedPNG
