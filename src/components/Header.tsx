'use client';

import { RiMenu3Fill } from 'react-icons/ri';
export default function Header() {
  return (
    <div id='header' className='w-full'>
      <div className='mx-auto flex max-w-[1284px] items-center justify-between px-5 py-[18px] sm:px-8 sm:py-[44px]'>
        <div className='tracking-{10%} cursor-pointer font-bold text-app-brand-600 sm:text-[28px]'>
          Travel
        </div>
        <RiMenu3Fill className='cursor-pointer text-2xl sm:text-[28px]' />
      </div>
    </div>
  );
}
