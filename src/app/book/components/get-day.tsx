import React, { useState } from 'react';

export function GetDay({
  selectedDate,
  setSelectedDate,
}: {
  readonly selectedDate: number | undefined;
  readonly setSelectedDate: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}): JSX.Element {
  return (
    <div className='box-border text-sm leading-[1.125rem]'>
      <div className='mr-[0.625rem] box-border text-sm leading-[1.125rem] shadow-white '>
        <div className='box-border flex w-[82rem] border-y-[0.1rem] border-solid bg-transparent p-5 gap-x-2 gap-y-2 flex-wrap'>
          {[...Array(30)].map((_, columnIndex) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={columnIndex}
              className=''
            >
              <Date
                isSelected={selectedDate === columnIndex}
                onSelect={() => {
                  setSelectedDate(columnIndex);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Date({
  isSelected,
  onSelect,
}: {
  readonly isSelected: boolean;
  readonly onSelect: () => void;
}) {
  return (
    <div
      style={{ marginBottom: '2px' }}
      onClick={() => {
        onSelect();
      }}
      onKeyDown={() => {
        onSelect();
      }}
    >
      <div
        className={`flex-cols-15 flex-rows-2 box-border flex h-[48px] w-[77px] cursor-pointer gap-4 rounded-lg border-[1.6px] border-solid ${
          isSelected ? 'border-black' : 'border-gray-200'
        } hover:border-gray-950`}
      >
        <div className='relative flex'>
          <div className='flex-1 flex-col items-center'>
            <div className='ml-1 w-1/2 text-center text-[13px] text-[#717171]'>
              03
            </div>
            <div className='left-1 top-5 ml-1 w-1/2 text-center text-[13px] font-normal text-[#717171]'>
              Thu
            </div>
          </div>
          <div className='left-8 top-2 mt-1 flex-1 text-center text-[32px] font-normal leading-8 text-[#717171]'>
            {28}
          </div>
        </div>
      </div>
    </div>
  );
}
