import { PNGAnimationDown, PNGAnimationUp } from '@/motion/animation';

export enum initialState {
  HIDDEN='hidden',
  VISIBLE='visible'
}

export enum resultState {
  HIDDEN='hidden',
  VISIBLE='visible'
}

export type AnimatedPNGprops = {
  initial: initialState;
  whileInView: resultState;
  variants: typeof PNGAnimationDown | typeof PNGAnimationUp;
  className?: string;
  src: string;
  alt: string;
}