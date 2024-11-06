'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaImage from '../../public/images/section.png';
import { fadeIn } from '@/animations/FadeIn';

export default function Cta() {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-[1284px] flex-col gap-[28px] px-5 py-[80px] sm:px-8 sm:py-[100px] lg:flex-row lg:items-center lg:justify-center lg:gap-[26px]'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-[28px]'>
            <motion.h3
              initial='hidden'
              variants={fadeIn('right', 0.4)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='text-header-mobile-1 sm:text-header-desktop-1'
            >
              <span className='text-app-brand-600'>Travel</span>, make the trip
              memorable
            </motion.h3>
            <motion.p
              initial='hidden'
              variants={fadeIn('right', 0.4)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='font-urbanist text-body-tablet-16 font-medium sm:text-body-desktop-18'
            >
              Thousands of our customers always recommend us because of the
              service we provide. Your trip will be very memorable with the best
              travel agent,<span className='text-app-brand-600'>Travel!</span>
            </motion.p>
          </div>
          <div className='hidden flex-row gap-8 sm:flex'>
            <motion.div
              initial='hidden'
              variants={fadeIn('down', 0.4)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button className='box-border border-2 border-transparent bg-app-brand-600 px-8 py-4 font-urbanist text-[18px] font-semibold text-app-white-100 duration-500 hover:border-app-brand-600 hover:bg-app-white-100 hover:text-app-brand-600'>
                See More
              </button>
            </motion.div>
            <motion.div
              initial='hidden'
              variants={fadeIn('down', 0.6)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='flex'
            >
              <motion.button className='flex-grow border-b-2 border-b-transparent pb-2 font-urbanist text-body-desktop-18 font-semibold text-[#333] duration-500 hover:border-b-[#D9D9D9]'>
                Discover More
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial='hidden'
          variants={fadeIn('left', 0.6)}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.5 }}
          className='w-full'
        >
          <Image src={CtaImage} className='w-full' alt='Picture of the CTA' />
        </motion.div>
      </div>
    </div>
  );
}
