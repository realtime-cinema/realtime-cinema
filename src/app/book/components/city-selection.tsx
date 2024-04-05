import React from 'react';

import { cn } from '@/utils/common';

export function CitySelection({
  cgvLocations,
  selectedCity,
  handleClick,
}: {
  readonly cgvLocations: string[];
  readonly selectedCity: string;
  readonly handleClick: (city: string) => void;
}) {
  return (
    <div className='p-5 '>
      <h3 className='mb-[10px] box-border block font-sans text-lg font-normal text-[#636363] '>
        Chọn tỉnh thành
      </h3>
      <div
        id='toggle-tabs'
        className='relative flex border-[#222] bg-transparent bg-auto bg-scroll text-center flex-col sm:flex-wrap sm:flex-row max-h-[10rem] overflow-y-auto'
      >
        {cgvLocations.map((location, index) => (
          <div
            key={location}
            className={` box-border flex h-10 max-w-36 items-center rounded-[5px] bg-auto bg-scroll bg-repeat bg-origin-padding text-center leading-[18px] mx-auto sm:mx-0 ${
              selectedCity === location
                ? 'bg-[#222] text-[#fff]'
                : ' bg-[#fdfcf0] text-[#636363]'
            }`}
          >
            <div
              className={cn(
                'cursor-pointer px-[10px] pt-[0.25px] text-center text-[13px] leading-[18px]',
                {
                  'text-[#fff]': selectedCity === location,
                  'text-[#222]': selectedCity !== location,
                }
              )}
              onClick={() => {
                handleClick(location);
              }}
              onKeyDown={() => {
                handleClick(location);
              }}
            >
              {location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
