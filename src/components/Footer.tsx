'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

export default function Footer() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-[42px] py-10 sm:gap-[80px] sm:py-[100px] sm:pb-[100px] sm:pt-12'>
        <div className='border-b-[1px] border-b-[#D9D9D9]'>
          <div className='pb-12 sm:pb-[42px]'>
            <div className='mx-auto flex max-w-[1284px] flex-col items-start gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between'>
              <p className='lg:heading-desktop-1 text-header-mobile-1 text-app-neutral-900'>
                Get our best offer now!
              </p>
              <button className='box-border border-2 border-transparent bg-app-brand-600 px-8 py-4 font-urbanist text-[18px] font-semibold text-app-white-100 duration-500 hover:border-app-brand-600 hover:bg-app-white-100 hover:text-app-brand-600'>
                Click Here!
              </button>
            </div>
          </div>
        </div>
        <div className='mx-auto w-full max-w-[1284px] px-5 md:items-end md:justify-between md:px-8 lg:flex lg:flex-row'>
          <div className=''>
            <h3 className='text-body-tablet-16 font-semibold text-app-brand-500'>
              Travel
            </h3>
            <p className='max-w-[313px] pb-[28px] pt-4 font-urbanist text-body-tablet-16 font-medium text-app-neutral-700'>
              The best travel agent in the world. Contact us immediatly now!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda officia aliquid consectetur?
            </p>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center justify-center gap-4'>
                <button className='bg-app-brand-100 group flex h-10 w-10 items-center justify-center rounded-full duration-500 hover:bg-app-brand-600'>
                  <FaInstagram className='group-hover:text-app-brand-100 h-[21px] w-[21px] text-app-brand-600' />
                </button>
                <button className='bg-app-brand-100 group flex h-10 w-10 items-center justify-center rounded-full duration-500 hover:bg-app-brand-600'>
                  <FaTwitter className='group-hover:text-app-brand-100 h-[21px] w-[21px] text-app-brand-600' />
                </button>
                <button className='bg-app-brand-100 group flex h-10 w-10 items-center justify-center rounded-full duration-500 hover:bg-app-brand-600'>
                  <FaYoutube className='group-hover:text-app-brand-100 h-[21px] w-[21px] text-app-brand-600' />
                </button>
              </div>
              <Link
                href={'#header'}
                className='group flex h-10 w-10 items-center justify-center rounded-full bg-app-neutral-500 duration-300 sm:hidden'
              >
                <IoIosArrowUp className='h-[21px] w-[21px] text-app-white-100' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <Link
              href={'#header'}
              className='group hidden h-10 w-10 items-center justify-center rounded-full bg-app-neutral-500 duration-300 lg:flex'
            >
              <IoIosArrowUp className='h-[21px] w-[21px] text-app-white-100' />
            </Link>
            <ul className='mx-auto mt-[42px] flex max-w-[463px] flex-row justify-between gap-[28px] font-urbanist sm:mb-3 lg:mx-0'>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
