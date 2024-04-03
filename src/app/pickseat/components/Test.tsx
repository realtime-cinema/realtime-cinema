import Image from 'next/image';

import { Chair } from './Chair';

export function Test() {
  const Ghe = () => {
    const chairs = [];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 25; j++) {
        if (i < 4) chairs.push(<Chair key={i} color='green' />);
        else if (i < 13) chairs.push(<Chair key={i} color='red' />);
        else chairs.push(<Chair key={i} color='pink' />);
      }
    }

    return chairs;
  };

  return (
    <div className='Main max-w-[80%] mx-auto'>
      <div className='Booking'>Booking Online</div>
      <div className='top_content'>
        <p>
          CGV Hùng Vương Plaza | Cinema 6 | Số ghế (260/262) <br />
          02/04/2024 11:00 ~ 02/04/2024 13:20
        </p>
      </div>
      <div className='Nguoi_ghe'>Người / Ghế</div>
      <div className='Screen w-full'>
        <Image
          src='https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png'
          width={1000}
          height={500}
          alt='Background'
          className='mx-auto'
        />
      </div>
      <div className='Chairs'>
        <Ghe />
      </div>
      <div className='Icons-notice'>
        <div className='Icons'>
          <div className='icon_checked'>
            <div className='Box' />
            Checked
          </div>
          <div className='icon_occupied'>
            <div className='Box' />
            Đã chọn
          </div>
          <div className='icon_unavailable'>
            <div className='Box'>X</div>
            Không thể chọn
          </div>
        </div>
        <div className='Icons'>
          <div className='icon-zone-standard'>
            <div className='Box' />
            Thường
          </div>
          <div className='icon-zone-vip'>
            <div className='Box' />
            Vip
          </div>
          <div className='icon-zone-sw'>
            <div className='Box' />
            Sweetbox
          </div>
        </div>
      </div>
    </div>
  );
}
