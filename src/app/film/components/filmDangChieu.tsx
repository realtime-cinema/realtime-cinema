import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { type PosterData } from './ComponentData';
import PosterFilm from './PosterFilm';

type Props = {
  readonly posterFilms: PosterData[];
};

export default function FilmDangChieu({ posterFilms }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <div className='mb-5 text-center md:mb-5 mt-[-20px] font-bold text-3xl'>
            Phim đang chiếu
          </div>

          <div className='mx-5 text-center'>
            <div className='swiper-wrapper flex justify-center '>
              {/* <Slider {...settings}>
                {posterFilms.map((posterFilm) => (
                  <PosterFilm key={posterFilm.id} posterfilm={posterFilm} />
                ))}
              </Slider> */}

              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
