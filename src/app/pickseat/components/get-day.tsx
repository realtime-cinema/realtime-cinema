'use client';

import React, { useState } from 'react';

export function GetDay(): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<number | undefined>(0); // State để lưu trữ ô được chọn

  const handleCellClick = (index: number) => {
    setSelectedCell(index); // Cập nhật ô được chọn
  };

  return (
    <div className='box-border text-sm leading-[1.125rem]'>
      <div className='mr-[0.625rem] box-border text-sm leading-[1.125rem] shadow-white '>
        <div className='box-border flex w-[82rem] border-y-[0.1rem] border-solid bg-transparent p-5 '>
          {[...Array(15)].map((_, columnIndex) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={columnIndex}
              style={{ width: `${90 / 15}%`, marginRight: '2px' }}
            >
              {[...Array(2)].map((_, rowIndex) => {
                const cellIndex = columnIndex * 2 + rowIndex;
                const isSelected = selectedCell === cellIndex;

                return (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={rowIndex}
                    style={{ marginBottom: '2px' }}
                    onClick={() => {
                      handleCellClick(cellIndex);
                    }}
                    onKeyDown={() => {
                      handleCellClick(cellIndex);
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
                          28
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
