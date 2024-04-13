import Image from 'next/image';

import { Chair } from './Chair';

export function PickSeat() {
  const Ghe = () => {
    const chairs = [];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 25; j++) {
        if (i < 4) chairs.push(<Chair key={i} color='grey border-[green]' />);
        else if (i < 13)
          chairs.push(<Chair key={i} color='red border-[red]' />);
        else chairs.push(<Chair key={i} color='pink bg-[#FF62B0]' />);
      }
    }

    return chairs;
  };

  const width = 20;

  return (
    <div className='Main max-w-[80%] mx-auto border-[2px] border-solid border-[#d4d3c9]'>
      <div
        className='Booking text-center uppercase text-[18px] bg-[#231d1c]
       text-[white] font-[600] leading-[32px]'
      >
        Booking Online
      </div>

      <div
        className='top_content w-full bg-[#fff1ce] text-[14px] leading-[18px]
      text-[#222] p-[10px] border-b-[2px] border-b-[#d4d3c9] border-b-[solid]
      mb-[20px] text font-bold'
      >
        CGV Hùng Vương Plaza | Cinema 6 | Số ghế (260/262) <br />
        02/04/2024 11:00 ~ 02/04/2024 13:20
      </div>
      <div
        className='Nguoi_ghe text-center w-full bg-[#bcbdc0] text-[16px]
      leading-[32px] border-t-[2px] mb-[12px] text font-bold '
      >
        Người / Ghế
      </div>
      <div className='Screen w-full'>
        <Image
          src='https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png'
          width={1000}
          height={500}
          alt='Background'
          className='img mx-auto mt-[20px] mb-[66px]'
        />
      </div>
      <div
        className='w-[600px] grid gap-[0.3rem] justify-center m-auto'
        style={{
          gridTemplateColumns: `repeat(${width},minmax(0,1fr))`,
        }}
      >
        <Ghe />
      </div>
      <div className='text-center mt-[40px]'>
        <div className='Icons inline-block text-left mr-[35px]'>
          <div className='icon_checked text-center inline-block'>
            <div className='Box w-[18px] h-[18px] bg-[#b11500] inline-block mr-[5px]' />
            Checked
          </div>
          <div className='icon_occupied'>
            <div className='Box w-[18px] h-[18px] bg-[#bbb] inline-block mr-[5px]' />
            Đã chọn
          </div>
          <div className='icon_unavailable'>
            <div className='Box w-[18px] h-[18px] bg-[#bbb] inline-block mr-[5px] text-center leading-[18px]'>
              X
            </div>
            Không thể chọn
          </div>
        </div>
        <div className='Icons inline-block text-left ml-[20px]'>
          <div className='icon-zone-standard'>
            <div className='Box w-[18px] h-[18px] border-solid border-[#01c73c] inline-block mr-[5px] border-[1px]' />
            Thường
          </div>
          <div className='icon-zone-vip'>
            <div className='Box w-[18px] h-[18px] border-solid border-[#f71708] inline-block mr-[5px] border-[1px]' />
            Vip
          </div>
          <div className='icon-zone-sw'>
            <div className='Box w-[18px] h-[18px] bg-[#FF62B0] inline-block mr-[5px]' />
            Sweetbox
          </div>
        </div>
      </div>
    </div>
  );
}
