'use client';

export default function Showcase() {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-[1284px] flex-col gap-[28px] px-5 py-[80px] sm:px-8 sm:py-[100px] lg:gap-[48px]'>
        <div className='mx-auto max-w-2xl'>
          <p className='text-center text-header-mobile-1 text-app-neutral-900 lg:text-header-desktop-1'>
            Watch our entire trip documentation
          </p>
        </div>
        <div className=''>
          <video width='100%' height='240' controls>
            <source src='../videos/cloud.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
}
