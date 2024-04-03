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
    <div
      id='toggle-tabs'
      className=' relative flex flex-col border-[#222] bg-transparent bg-auto bg-scroll py-5 text-center sm:flex-row sm:flex-wrap  '
    >
      {cgvLocations.map((location, index) => (
        <div
          key={location}
          className={` box-border flex h-10 max-w-36 items-center rounded-[5px] bg-auto bg-scroll bg-repeat bg-origin-padding text-center leading-[18px] ${
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
  );
}
