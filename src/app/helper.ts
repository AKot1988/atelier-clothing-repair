import { initialState, resultState } from '@/components/AnimatedPNG/helper';
import { PNGAnimationDown, PNGAnimationUp } from '@/motion/animation'

export interface HomeProps {
  content: React.ReactNode;
}

export type LayoutProps = {
  children: React.ReactNode;
};

export const CoatPNGProps = {
  initial: initialState.HIDDEN,
  whileInView: resultState.VISIBLE,
  variants: PNGAnimationDown,
  src: '/png/coat_SL.png',
  alt: 'терракотове пальто',
}

export const JeansPNGProps = {
  initial: initialState.HIDDEN,
  whileInView: resultState.VISIBLE,
  variants: PNGAnimationUp,
  src: '/png/blue-jeans-isolated-transparent-background_191095-17299.png',
  alt: 'сині джинси',
}