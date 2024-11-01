import Image from 'next/image';
import HeroImg from '../../public/images/hero.png';
import Orange from '../../public/images/orange-bg.png';
import Blury from '../../public/images/circle-blury.png';

export default function Hero() {
  return (
    <div className='w-full pt-[18px] sm:pt-[44px]'>
      <div className='mx-auto flex max-w-[1284px] flex-col items-center justify-between px-5 sm:px-8'>
        <h1 className='relative top-10 text-center text-display-mobile-1 text-app-neutral-900 sm:z-40 lg:top-[80px] lg:text-display-desktop-1'>
          <span className='text-app-brand-600'>Travel</span> around the world
        </h1>
        <div className='relative z-50 w-full'>
          <Image
            src={Blury}
            className='absolute -top-[45%] z-10 mx-auto w-full'
            alt='blury image'
          />
          <Image
            src={Orange}
            className='absolute bottom-0 z-20 mx-auto w-full sm:w-full'
            alt='orange image'
          />
          <Image
            src={HeroImg}
            className='relative z-50 mx-auto w-full'
            alt='hero image'
          />
        </div>
      </div>
      <div className='mx-auto flex max-w-[1284px] flex-col items-center justify-between gap-4 bg-app-brand-600 px-5 py-[18px] sm:flex-row sm:px-8 sm:py-[44px]'>
        <p className='flex-1 text-center font-urbanist text-body-tablet-16 text-app-white-100 sm:text-left sm:text-body-desktop-18'>
          Travel around the world to see the beauty of nature easily and safely
          with Travel.
        </p>
        <div className='h-[1px] w-full self-stretch bg-app-white-100 sm:h-auto sm:w-[1px]'></div>
        <p className='text-center text-[20px] text-body-tablet-16 text-app-white-100 sm:max-w-[221px] sm:text-2xl'>
          We Are The Best Travel Agent
        </p>
        <div className='h-[1px] w-full self-stretch bg-app-white-100 sm:h-auto sm:w-[1px]'></div>
        <p className='flex-1 text-center font-urbanist text-body-tablet-16 text-app-white-100 sm:text-left sm:text-body-desktop-18'>
          Everyone is young once, but not everyone has traveled the world!
        </p>
      </div>
    </div>
  );
}
