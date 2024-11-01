import { destinations } from '@/data/destination';
import Image, { StaticImageData } from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';

type destinations = {
  image: StaticImageData;
  name: string;
  location: string;
};

export default function Destination() {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-[1284px] flex-col gap-[28px] px-5 py-[80px] sm:gap-[60px] sm:px-8 sm:py-[100px]'>
        {/* top */}
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <h5 className='text-header-mobile-1 text-app-neutral-900 sm:text-header-desktop-1'>
            Find your best destination
          </h5>
          <div className='flex flex-col gap-6'>
            <p className='font-urbanist text-body-tablet-16 text-app-neutral-700'>
              We have more than{' '}
              <span className='text-app-neutral-900'>1000+ </span>
              destinations you can choose.
            </p>
            <div className='flex flex-row items-center gap-2 rounded-full bg-[#fafafa] p-2'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full'>
                <HiOutlineLocationMarker className='h-[28px] w-[28px] text-app-neutral-500' />
              </div>
              <input
                placeholder='Search destinations ...'
                type='text'
                className='flex-1 bg-[#fafafa] font-urbanist outline-0 placeholder:text-app-neutral-500 focus:ring-0'
              />
              <button className='flex h-12 w-12 items-center justify-center rounded-full bg-[#EE8F39]'>
                <RiSearchLine className='h-6 w-6 text-white' />
              </button>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='grid gap-11 sm:grid-cols-2 lg:grid-cols-3'>
          {destinations.map((item: destinations, index) => (
            <div
              className='flex w-full flex-col gap-[28px] border-[1px] border-[#F2F2F2] p-4 shadow-md'
              key={index}
            >
              <div className='w-full bg-red-200'>
                <Image
                  src={item.image}
                  alt='{item.image}'
                  className='w-full object-cover'
                ></Image>
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='font-urbanist text-header-mobile-3 text-app-neutral-900 md:text-header-desktop-3'>
                  {item.name}
                </h5>
                <div className='flex flex-row items-center gap-2'>
                  <TiLocation className='h-6 w-6 text-app-brand-600' />
                  <p className='font-urbanist text-body-tablet-16 font-semibold md:text-body-desktop-18'>
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
