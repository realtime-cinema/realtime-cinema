import React from 'react';
import Image from 'next/image';

import PosterFilm from './PosterFilm';

export default function FilmDangChieu() {
  return (
    <div className=''>
      <section className="scroll-margin-top bg-[url('https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg')] bg-black bg-cover bg-no-repeat py-8 md:py-10 lg:py-14 relative bg-[size-y:50%] width"
      style={{ height: '50%', width: '100%' }}
      >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-center max-w-6xl px-5 md:px-8 lg:px-8'>
          <div className='mb-5 text-center md:mb-5 mt-[-20px] font-bold'>
            Phim đang chiếu
          </div>

          <div className='-mx-5 text-center'>
            <div className='fresnel-container fresnel-greaterThan-sm fresnel-:R2hom'>
              <div className='swiper-cinema relative'>
                <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events'>
                  <div className='swiper-wrapper flex'>
                    {/* <PosterFilm />
                    <PosterFilm />
                    <PosterFilm />
                    <PosterFilm />
                    <PosterFilm /> */}
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
