'use client';

import React, { useState } from 'react';

import { CitySelection } from './city-selection';
import { GetDay } from './get-day';

export function Bookingtime() {
  const [selectedCity, setSelectedCity] = useState('Hồ Chí Minh');
  const [selectedTheater, setSelectedTheater] = useState<string | undefined>(
    '2D Vietnam Sub'
  );

  const cgvLocations = [
    'Hồ Chí Minh',
    'Hà Nội',
    'Đà Nẵng',
    'Cần Thơ',
    'Đồng Nai',
    'Hải Phòng',
    'Quảng Ninh',
    'Bà Rịa-Vũng Tàu',
    'Bình Định',
    'Bình Dương',
    'Đắk Lắk',
    'Trà Vinh',
    'Yên Bái',
    'Vĩnh Long',
    'Kiên Giang',
    'Hậu Giang',
    'Hà Tĩnh',
    'Phú Yên',
    'Đồng Tháp',
    'Bạc Liêu',
    'Khánh Hòa',
    'Hưng Yên',
    'Kon Tum',
    'Lạng Sơn',
    'Nghệ An',
    'Phú Thọ',
    'Quảng Ngãi',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Nguyên',
    'Tiền Giang',
  ];

  const MovieFormats = [
    '2D Vietnam Sub',
    '2D Kor&Viet Sub',
    '3D Vietnam Sub',
    'IMAX3D Vietnam Sub',
    '4DX2D Vietnam Sub',
    '4DX3D Vietnam Sub',
    'SCREENX-2D Vietnam Sub',
    'ULTRA 4DX-SCX2D Vietnam Sub',
  ];

  const handleClick = (city: string) => {
    setSelectedCity(city);
  };

  const handleTheaterClick = (index: number) => {
    const theater = MovieFormats[index];
    setSelectedTheater(theater === selectedTheater ? undefined : theater);
  };

  return (
    <div
      id='cboxContent'
      className='mt-5 box-content h-[37rem] w-full overflow-x-auto overflow-y-hidden text-sm'
    >
      <div
        id='cboxLoaded'
        className='box-border h-[36rem]  w-screen overflow-auto overflow-x-hidden bg-[#fdfcf0] bg-auto bg-scroll bg-repeat bg-origin-padding p-[0.3125rem] text-sm'
      >
        {/* getday ngay thang nam */}
        <GetDay />

        <div className='w-[1310.2px] px-5 '>
          <div
            id='tab_container'
            className='inline-block  border-[#222] text-sm leading-[18px]'
          >
            <div id='tab-contentshowtimes' className='visible  '>
              <div id='tab-cgv-movie-cities'>
                <CitySelection
                  cgvLocations={cgvLocations}
                  selectedCity={selectedCity}
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id='tab-container theaters'
          className='visible isolate box-border inline-block h-[#1270.2px] border-t-[#222] text-[14px] leading-[18px]'
        >
          <div
            id='tab-theaters type'
            className=' mb-[10px] block w-screen bg-[#fdfcf0] text-[14px] leading-[18px]'
          >
            <div className='border-[#222]bg-transparent relative flex flex-col  border-y-[1.6px] bg-origin-padding p-5 text-center sm:flex-row sm:flex-wrap'>
              {MovieFormats.map((format, index) => (
                <div
                  key={index}
                  className={`mr-[3px] inline-block cursor-pointer rounded-[5px] border-[1.6px] border-[#222] px-[10px] text-center text-[12px] leading-[29px] ${
                    format === selectedTheater ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => {
                    handleTheaterClick(index);
                  }}
                >
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* type of theaters */}
        <div
          id='tab-container site '
          className='visible box-border inline-block h-auto w-full border-[#222] leading-5 '
        >
          <div
            id='tab-contains showtime'
            className='box-border block h-auto w-auto p-[15px] text-[14px] leading-[18px]'
          >
            <div
              id='site sitecgv'
              className='mb-[20px] h-auto w-full  border-b-[0.8px] border-b-[#222] pb-[10px]'
            >
              <h3 className='mb-[10px] box-border block font-sans text-lg font-normal text-[#636363] '>
                CGV Hùng Vương Plaza
              </h3>
              <h4 className='mb-[10px] box-border font-sans text-[15px]  font-medium text-[#222]'>
                2D Cinema
              </h4>
              <div
                id='list-time cinema'
                className='mb-[15px] mr-[3px] mt-[3px] box-border flex h-[29.6px] w-[125px] cursor-pointer flex-wrap rounded-[5px] border-[2px] border-solid border-[#cbcabe] px-[10px] py-[5]  hover:border-gray-950 '
              >
                <div className='box-border flex w-[103.4px] items-center justify-center font-sans font-medium leading-[18px] text-[#464343]'>
                  16:15 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
