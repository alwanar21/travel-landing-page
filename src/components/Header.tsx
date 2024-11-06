'use client';

import { fadeIn } from '@/animations/FadeIn';
import { motion, useScroll, useSpring } from 'framer-motion';
import { RiMenu3Fill } from 'react-icons/ri';
export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      initial='hidden'
      variants={fadeIn('down', 0.2)}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      id='header'
      className='sticky top-0 z-[60] w-full bg-white'
    >
      <div className='relative'>
        <div className='mx-auto flex max-w-[1284px] items-center justify-between px-5 py-[18px] sm:px-8 sm:py-[44px]'>
          <div className='tracking-{10%} cursor-pointer font-bold text-app-brand-600 sm:text-[28px]'>
            Travel
          </div>
          <RiMenu3Fill className='cursor-pointer text-2xl sm:text-[28px]' />
        </div>
        <motion.div
          className='fixed left-0 right-0 top-0 h-[5px] origin-left bg-app-brand-500 sm:h-[8px] lg:h-[10px]'
          style={{ scaleX }}
        />
      </div>
    </motion.div>
  );
}
