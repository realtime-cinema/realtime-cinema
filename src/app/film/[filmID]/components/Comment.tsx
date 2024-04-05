import React from 'react';
import Image from 'next/image';

import LikeButton from '../assets/like.svg';
import accumulation from '../assets/pink-accumulation.svg';

export function Comment({ comment }) {
  const avt = require(`../assets/avt${comment.avt}.jpg`);
  return (
    <div>
      {/* comment 1 */}
      <div className='py-4 w-full mt-4 border-b border-gray-200 pb-[50px]'>
        {/* avt username and purchased time  */}
        <div className='relative flex items-center'>
          {/* avt */}
          <Image
            src={avt}
            alt={comment.username}
            height={60}
            width={60}
            loading='lazy'
            className='rounded-full object-cover h-12 w-12'
          />
          {/* username and purchased time */}
          <div className='ml-2 sm:ml-3'>
            {/* username */}
            <div className='text-[23px] text-gray-800'>{comment.username}</div>
            {/* purchesed time */}
            <div className='mt-0.5 flex items-center'>
              {/* time */}
              <div className='text-xs text-gray-500'>{comment.time}</div>
              {/* confirm purchase */}
              <div className='flex items-center pl-2 text-xs text-pink-500'>
                <Image
                  src={accumulation}
                  alt='tich hong'
                  height={20}
                  width={20}
                />
                {comment.purchaseMethod}
              </div>
            </div>
          </div>
          {/* red './star.svg' */}
          <div className='absolute right-1 top-0 '>
            <Image
              src='/red-star.jpg'
              width={20}
              height={20}
              alt='red ./star.svg'
              className='w-5'
              loading='lazy'
            />
          </div>
        </div>

        {/* component 2 */}
        <div className='relative mt-3'>
          {/* './star.svg' */}
          <div className='flex items-center mb-0.5 text-md font-semibold text-gray-900'>
            <Image
              src='/star.svg'
              alt='./star.svg'
              width={20}
              height={20}
              className='h-5 w-5 mr-1'
            />
            {/* point */}
            <div className='pl-0.5'>{comment.rating}</div>
            <div className='pl-0.5'>/10 · </div>
            {/* vote */}
            <div className='pl-0.5'>{comment.vote}</div>
          </div>
          {/* comment */}
          <div className='whitespace-pre-wrap break-words text-md leading-relaxed text-gray-900'>
            {comment.content}
          </div>
          {/* useful */}
          <div className='mt-4 flex items-center space-x-5 text-sm'>
            <div className='flex items-center space-x-1'>
              <Image
                src={LikeButton}
                alt=''
                height={20}
                width={20}
                className='cursor-pointer'
                onClick={comment.likes + 1}
              />
              <div className=' text-neutral-700 font-bold'>
                {comment.likes} thấy hữu ích
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
