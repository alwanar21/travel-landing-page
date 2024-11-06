'use client';

import { fadeIn } from '@/animations/FadeIn';
import { reasons } from '@/data/reason';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Reason() {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-[1284px] px-5 py-[18px] sm:px-8 sm:py-[100px]'>
        <div className='mx-auto mb-[60px] flex max-w-[876px] flex-col justify-center gap-3 text-center sm:gap-6'>
          <motion.h2
            initial='hidden'
            variants={fadeIn('down', 0.15)}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='text-header-mobile-1 text-app-neutral-900 lg:text-header-desktop-1'
          >
            Why must choose us
          </motion.h2>
          <motion.p
            initial='hidden'
            variants={fadeIn('down', 0.15)}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='font-urbanist text-body-tablet-16 font-medium text-app-neutral-600 lg:text-body-desktop-18'
          >
            We have been around for over 10 years. Accompany all our customers
            all over the world. Thousands of our customers always recommend us
            because of the service we provide. We are always re-elected and now
            you will choose us as your travel agent!
          </motion.p>
        </div>
        <div className='grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-3 sm:gap-[28px]'>
          {reasons.map((data, index) => (
            <motion.div
              key={index}
              initial='hidden'
              variants={fadeIn('down', index * 0.15)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.4 }}
              className='h-full'
            >
              <div className='group flex h-full flex-col border-t-4 border-t-app-brand-600 px-5 pb-[32px] pt-[28px] duration-500 ease-in-out hover:bg-app-brand-600'>
                <h2 className='text-header-mobile-2 font-semibold text-app-neutral-900 group-hover:text-app-white-100 lg:text-header-desktop-2'>
                  {data.title}
                </h2>
                <p className='mb-[28px] mt-2 flex flex-grow text-body-tablet-16 text-app-neutral-600 group-hover:text-app-white-300 lg:text-body-desktop-18'>
                  {data.description}
                </p>
                <div className='flex justify-end'>
                  <Link
                    href='/'
                    className='ml-auto flex flex-row items-center justify-end gap-3 text-app-brand-600 group-hover:text-app-white-100 lg:text-xl'
                  >
                    More Details
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
