import React from 'react';
import Image from 'next/image';

import PosterFilm from './PosterFilm';

export default function FilmDangChieu() {
  return (
    <div className=''>
      <section className='scroll-margin-top py-8 md:py-10 lg:py-14 relative ] '>
        <div className='h-[500px] w-full relative'>
          <Image
            src='/bg.jpg'
            width={100}
            height={50}
            objectFit='cover'
            alt='Seishun 18×2: Kimi e to Tsuzuku Michi'
            loading='lazy'
            className='h-[550px] w-full'
          />
        </div>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-center max-w-6xl px-5 md:px-8 lg:px-8'>
          <div className='mb-5 text-center md:mb-5 mt-[-20px] font-bold'>
            Phim đang chiếu
          </div>

          <div className='-mx-5 text-center'>
            <div className='fresnel-container fresnel-greaterThan-sm fresnel-:R2hom'>
              <div className='swiper-cinema relative'>
                <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events'>
                  <div className='swiper-wrapper flex'>
                    <PosterFilm />
                    <PosterFilm />
                    <PosterFilm />
                    <PosterFilm />
                    <PosterFilm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
