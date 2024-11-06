'use client';

import { fadeIn } from '@/animations/FadeIn';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-[1284px] flex-col gap-[28px] px-5 py-[80px] sm:px-8 sm:py-[100px] lg:gap-[48px]'>
        <div className='mx-auto max-w-2xl'>
          <motion.p
            initial='hidden'
            variants={fadeIn('down', 0.6)}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className='text-center text-header-mobile-1 text-app-neutral-900 lg:text-header-desktop-1'
          >
            Watch our entire trip documentation
          </motion.p>
        </div>
        <motion.div
          initial='hidden'
          variants={fadeIn('down', 0.6)}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className=''
        >
          <video width='100%' height='240' controls>
            <source src='../videos/cloud.mp4' type='video/mp4' />
          </video>
        </motion.div>
      </div>
    </div>
  );
}
