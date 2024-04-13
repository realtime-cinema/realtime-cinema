import Image from 'next/image';
import Link from 'next/link';
import { Ticket } from 'lucide-react';

import type { PosterData } from './ComponentData';

type Props = {
  readonly poster: PosterData;
};

export function Poster({ poster }: Props) {
  // const posterfilm = require(`../assets/${poster.posterFilm}`);
  return (
    <div className='w-[100%] h-[100%] content-center'>
      {/* './poster.jpg' and desciption  */}
      <div className='relative bg-cover bg-center top-0 z-0 h-[600px] w-[100%] overflow-hidden bg-no-repeat '>
        {/* './poster.jpg' */}

        {/* sdkfjgh */}
        <div className='mx-auto w-full max-w-6xl  px-5 md:px-8 lg:px-8 '>
          <div className='flex flex-wrap items-center md:flex-nowrap md:space-x-10 lg:items-start '>
            <div className='relative  w-full flex md:relative my-[25px] gap-5'>
              {/* image */}
              <div className='w-1/3'>
                <Image
                  alt='MAI'
                  src='/poster.jpg'
                  width={600}
                  height={550}
                  decoding='async'
                  data-nimg='intrinsic'
                  className='w-[600px] h-[550px] justify-self-center items-center basis-[350px] rounded-lg'
                />
              </div>

              {/* description */}
              <div className='relative  flex-shrink w-2/3 bg-gray-600 rounded-lg pl-1 '>
                {/* 18+ */}
                <div className=' inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white bg-red-600 text-opacity-95 cinema-rate-red backdrop-blur-3xl '>
                  {poster.age}+
                </div>
                {/* mai */}
                <h1 className=' mt-2 text-2xl font-bold text-white md:text-4xl backdrop-blur-xl'>
                  {poster.name}
                </h1>
                {/* mai 2024 151p */}
                <ul className=' mt-1 flex flex-wrap items-center text-sm text-white text-opacity-60 md:text-base'>
                  <li className=''>{poster.name}</li>
                  <li className=' mx-2 text-base font-normal'>·</li>
                  <li className=''>{poster.year}</li>
                  <li className=' mx-2 text-base font-normal'>·</li>
                  <li className=''>{poster.time} phút</li>
                </ul>
                {/* './star.svg' */}
                <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto overflow-y-hidden pb-2 pt-2 text-sm sm:pt-3 md:space-x-3 md:text-base'>
                  <div className='mr-2 flex shrink-0 flex-nowrap items-center space-x-0.5 pb-1'>
                    <Image src='/star.svg' alt='' height={28} width={28} />
                    <div className='flex items-center space-x-1 text-xl'>
                      <div className='text-2xl font-bold text-white'>
                        {poster.rating}
                      </div>
                      <div className='text-[10px] text-gray-400 self-end -mb-[3px]'>
                        {poster.totalRatings} đánh giá
                      </div>
                    </div>
                  </div>
                </div>
                {/* cap */}
                <p className='mb-3 italic text-white text-opacity-60'>
                  {poster.caption}
                </p>
                {/* nd */}
                <h3 className='font-bold text-white text-opacity-90 sm:text-base'>
                  Nội dung
                </h3>
                {/* nd dai */}
                <div className='mt-1 text-sm leading-relaxed text-white text-opacity-70'>
                  {poster.description}
                </div>
                {/* info */}
                <div className='mt-3 text-sm text-gray-700'>
                  <div className='mb-2 flex flex-nowrap space-x-4 '>
                    {/* day */}
                    <div>
                      <div className='whitespace-nowrap text-white text-opacity-50'>
                        Ngày chiếu
                      </div>
                      <div className='mt-1 font-bold text-white text-opacity-90'>
                        {poster.releaseDate}
                      </div>
                    </div>
                    {/* type */}
                    <div>
                      <div className='whitespace-nowrap text-white text-opacity-50'>
                        Thể loại
                      </div>
                      <div className='mt-1 font-bold text-white text-opacity-90'>
                        {poster.filmGenres}
                      </div>
                    </div>
                    {/* nation */}
                    <div>
                      <div className='whitespace-nowrap text-white text-opacity-50'>
                        Quốc gia
                      </div>
                      <div className='mt-1 font-bold text-white text-opacity-90'>
                        {poster.nation}
                      </div>
                    </div>
                  </div>
                </div>
                {/* trailer review */}

                <div className='mt-3 flex items-center space-x-4'>
                  {/* trailer */}
                  <Link
                    target='_blank'
                    className='tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline'
                    href={poster.trailerLink}
                  >
                    <div className='h-6 w-6 rounded-full border-2 border-pink-600 text-white/80'>
                      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                      <svg
                        viewBox='0 0 48 48'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path
                            d='M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z'
                            fill='currentColor'
                            fillRule='nonzero'
                          />
                        </g>
                      </svg>
                    </div>

                    <span className='text-white'>Xem trailer</span>
                  </Link>

                  {/* review */}
                  <Link
                    target='_blank'
                    className='tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline'
                    href={poster.reviewLink}
                  >
                    <div className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-yellow-300'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-white/85 h-4 w-4 '
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    </div>
                    <span className='text-white'>Xem review</span>
                  </Link>
                  <Link
                    target='_blank'
                    className='tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline'
                    href={`/pickseat/${poster.filmID}`}
                  >
                    <Ticket className='h-6 w-6 text-white/85' />
                    <span className='text-white'>Đặt vé</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
