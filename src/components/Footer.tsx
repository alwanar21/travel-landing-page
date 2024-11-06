'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import { fadeIn } from '@/animations/FadeIn';

export default function Footer() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-[42px] py-10 sm:gap-[80px] sm:py-[100px] sm:pb-[100px] sm:pt-12'>
        <div className='border-b-[1px] border-b-[#D9D9D9]'>
          <div className='pb-12 sm:pb-[42px]'>
            <motion.div
              initial='hidden'
              variants={fadeIn('down', 0.3)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='mx-auto flex max-w-[1284px] flex-col items-start gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between'
            >
              <p className='lg:heading-desktop-1 text-header-mobile-1 text-app-neutral-900'>
                Get our best offer now!
              </p>
              <button className='box-border border-2 border-transparent bg-app-brand-600 px-8 py-4 font-urbanist text-[18px] font-semibold text-app-white-100 duration-500 hover:border-app-brand-600 hover:bg-app-white-100 hover:text-app-brand-600'>
                Click Here!
              </button>
            </motion.div>
          </div>
        </div>
        <div className='mx-auto w-full max-w-[1284px] px-5 md:items-end md:justify-between md:px-8 lg:flex lg:flex-row'>
          <div className=''>
            <motion.h3
              initial='hidden'
              variants={fadeIn('down', 0.15)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='text-body-tablet-16 font-semibold text-app-brand-500 sm:text-[28px]'
            >
              Travel
            </motion.h3>
            <motion.p
              initial='hidden'
              variants={fadeIn('down', 0.5)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='pb-[28px] pt-4 font-urbanist text-body-tablet-16 font-medium text-app-neutral-700 sm:text-body-desktop-18'
            >
              The best travel agent in the world. Contact us immediatly now!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda officia aliquid consectetur?
            </motion.p>
            <div className='flex flex-row items-center justify-between'>
              <motion.div
                initial='hidden'
                variants={fadeIn('down', 0.5)}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-row items-center justify-center gap-4'
              >
                <button className='group flex h-10 w-10 items-center justify-center rounded-full bg-app-brand-100 duration-500 hover:bg-app-brand-600'>
                  <FaInstagram className='h-[21px] w-[21px] text-app-brand-600 group-hover:text-app-brand-100' />
                </button>
                <button className='group flex h-10 w-10 items-center justify-center rounded-full bg-app-brand-100 duration-500 hover:bg-app-brand-600'>
                  <FaTwitter className='h-[21px] w-[21px] text-app-brand-600 group-hover:text-app-brand-100' />
                </button>
                <button className='group flex h-10 w-10 items-center justify-center rounded-full bg-app-brand-100 duration-500 hover:bg-app-brand-600'>
                  <FaYoutube className='h-[21px] w-[21px] text-app-brand-600 group-hover:text-app-brand-100' />
                </button>
              </motion.div>
              <Link
                href={'#header'}
                className='group flex h-10 w-10 items-center justify-center rounded-full bg-app-neutral-500 duration-300 sm:hidden'
              >
                <IoIosArrowUp className='h-[21px] w-[21px] text-app-white-100' />
              </Link>
            </div>
          </div>
          <div className='flex w-full flex-col items-end'>
            <Link
              href={'#header'}
              className='group hidden h-10 w-10 items-center justify-center rounded-full bg-app-neutral-500 duration-300 lg:flex'
            >
              <IoIosArrowUp className='h-[21px] w-[21px] text-app-white-100' />
            </Link>
            <motion.ul
              initial='hidden'
              variants={fadeIn('down', 0.5)}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className='mx-auto mt-[42px] flex max-w-[463px] flex-row flex-wrap justify-between gap-x-[28px] gap-y-2 font-urbanist sm:mb-3 sm:max-w-full sm:flex-nowrap lg:mx-0'
            >
              <li className='text-body-mobile-15 font-semibold text-app-neutral-700'>
                Home
              </li>
              <li className='text-body-mobile-15 font-semibold text-app-neutral-700'>
                Destinations
              </li>
              <li className='text-body-mobile-15 font-semibold text-app-neutral-700'>
                Guide
              </li>
              <li className='text-body-mobile-15 font-semibold text-app-neutral-700'>
                Contact Us
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
