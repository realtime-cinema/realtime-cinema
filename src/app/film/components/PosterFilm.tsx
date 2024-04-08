import React from 'react';
import Image from 'next/image';

import { type PosterData } from './ComponentData';

type Props = {
  readonly posterfilm: PosterData;
};

function PosterFilm({ posterfilm }: Props) {
  let backgroundColor = '';
  if (posterfilm.age < 16) {
    backgroundColor = 'bg-green-600';
  } else if (posterfilm.age === 16) {
    backgroundColor = 'bg-yellow-500';
  } else {
    backgroundColor = 'bg-red-600';
  }

  return (
    <div className='mx-8 drag-none'>
      <div className='w-full mr-[15px] drag-none '>
        <div className=' group relative block cursor-pointer drag-none'>
          <div className=' absolute left-1/2 top-1/2 z-[20] h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-auto transition-transform group-hover:scale-110 md:h-10 md:w-10'>
            <svg
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
              className=''
            >
              <g fill='none' fill-rule='evenodd' className=''>
                <circle
                  stroke='#FFF'
                  stroke-width='2'
                  fill-opacity='.24'
                  fill='#000'
                  cx='24'
                  cy='24'
                  r='23'
                  className=''
                />
                <path
                  d='M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z'
                  fill='#FFF'
                  fill-rule='nonzero'
                  className=''
                />
              </g>
            </svg>
          </div>
          <div className=' background-gray-100 border-blend relative z-10 overflow-hidden rounded drag-none'>
            <a href='fb.com'>
              <div className=' overlay absolute inset-0 z-20 bg-transparent px-2 py-2 drag-none'>
                <div className=' flex flex-row flex-nowrap space-x-2 drag-none'>
                  <div
                    className={`inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white  text-opacity-95 backdrop-blur-3xl ${backgroundColor}`}
                  >
                    {posterfilm.age}+
                  </div>
                </div>
              </div>
            </a>
            <div className=' flex bg-gray-900 w-[220px]'>
              <div className='aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105'>
                <Image
                  src={posterfilm.imgPoster}
                  width={250}
                  height={300}
                  alt={posterfilm.filmName}
                  className='h-[300px] w-[250px] object-cover object-center select-none'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
          <div className=' absolute -bottom-4 left-0 z-10 text-4xl font-bold text-white text-opacity-90 drop-shadow md:text-5xl'>
            {posterfilm.id}
          </div>
        </div>
        <div className=' mt-2'>
          <a className=' group' href={posterfilm.filmLink}>
            <div className=' font-semibold leading-tight sm:text-md text-white group-hover:text-pink-400 flex justify-start mt-3'>
              <div className='break-works'>{posterfilm.filmName}</div>
            </div>
            <div className=' mt-1 truncate text-tiny leading-tight text-gray-400 group-hover:text-pink-400 flex justify-start'>
              {posterfilm.filmGenre}
            </div>
          </a>
        </div>
        <div className=' mt-1 flex items-center text-tiny text-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='mr-1 h-4 w-4 text-yellow-400'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>{' '}
          {posterfilm.rating}
        </div>
      </div>
    </div>
  );
}

export default PosterFilm;
