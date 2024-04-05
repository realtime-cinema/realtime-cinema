import React, { useState } from 'react';

import { getCurrentday, getDayAndWeekday } from './dateUtils';

export function GetDay({
  selectedDate,
  setSelectedDate,
}: {
  readonly selectedDate: number | undefined;
  readonly setSelectedDate: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}): JSX.Element {
  let { day, daysInMonth, month } = getCurrentday();

  // Function to generate unique IDs
  const generateId = (prefix: string): string =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='box-border text-sm leading-[1.125rem]'>
      <div className='mr-[0.625rem] box-border text-sm leading-[1.125rem] shadow-white '>
        <div className='box-border flex w-[82rem] border-y-[0.1rem] border-solid bg-transparent p-5 gap-x-2 gap-y-2 flex-wrap'>
          {[...Array(daysInMonth)].map((_, columnIndex) => {
            let { day: currentDay, weekday } = getDayAndWeekday(columnIndex);
            const uniqueId = generateId('date'); // Generate unique ID

            if (day + columnIndex > daysInMonth) {
              // If current day exceeds the days in the month
              if (currentDay <= daysInMonth) {
                currentDay = day + columnIndex - daysInMonth; // Set current day for the new month
                month++; // Move to the next month
              }

              if (month > 11) {
                month = 0; // Reset
              }
            }

            return (
              <div key={uniqueId} className=''>
                <Date
                  id={uniqueId} // Pass unique ID as prop
                  day={currentDay}
                  month={month} // Pass updated month as prop
                  weekday={weekday}
                  isSelected={selectedDate === columnIndex}
                  onSelect={() => {
                    setSelectedDate(columnIndex);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Date({
  id,
  day,
  month,
  weekday,
  isSelected,
  onSelect,
}: {
  readonly id: string; // Add ID prop
  readonly day: number;
  readonly month: number; // Add month prop
  readonly weekday: string;
  readonly isSelected: boolean;
  readonly onSelect: () => void;
}) {
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');
  return (
    <div
      key={id} // Use ID as key
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
              {formattedMonth}
            </div>
            <div className='left-1 top-5 ml-1 w-1/2 text-center text-[13px] font-normal text-[#717171]'>
              {weekday}
            </div>
          </div>
          <div className=' left-8 top-2 mt-1 flex-1 text-center text-[32px] font-normal leading-8 text-[#717171]'>
            {formattedDay}
          </div>
        </div>
      </div>
    </div>
  );
}
