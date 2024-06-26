'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { myfetch } from '@/tanstack-query/myfetch';

import { socket } from '@/lib/socket.io-client';
import { cn } from '@/lib/utils';
import { usePickSeat } from '@/hooks/usePickSeat';
import { Button } from '@/components/ui/button';

import { Chair } from './Chair';

export function PickSeat() {
  const Ghe = () => {
    const chairs = [];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 25; j++) {
        if (i < 4)
          chairs.push(
            <Chair
              key={`${i}-${j}`}
              data={{
                x: i,
                y: j,
              }}
              color='grey border-[green]'
            />
          );
        else if (i < 13)
          chairs.push(
            <Chair
              key={`${i}-${j}`}
              data={{
                x: i,
                y: j,
              }}
              color='red border-[red]'
            />
          );
        else
          chairs.push(
            <Chair
              key={`${i}-${j}`}
              data={{
                x: i,
                y: j,
              }}
              color='pink bg-[#FF62B0]'
            />
          );
      }
    }

    return chairs;
  };

  const toggleSeat = usePickSeat((state) => state.toggleSeat);
  const clear = usePickSeat((state) => state.clear);
  const [loading, setLoading] = useState(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    socket.emit('refresh');
    function onConnect() {
      // setIsConnected(true);
    }

    function onDisconnect() {
      // setIsConnected(false);
    }

    function onFooEvent(diff: {
      added: Array<`${string}#${string}#${string}`>;
      removed: Array<`${string}#${string}#${string}`>;
    }) {
      console.log(diff);
      // biome-ignore lint/complexity/noForEach: <explanation>
      diff.added.forEach((seat) => {
        const [performID, x, y] = seat.split('#');
        toggleSeat({ x: Number(x), y: Number(y) }, true);
      });

      // biome-ignore lint/complexity/noForEach: <explanation>
      diff.removed.forEach((seat) => {
        const [performID, x, y] = seat.split('#');
        toggleSeat({ x: Number(x), y: Number(y) }, false);
      });
    }

    // function onFooEvent2(seats: string[]) {
    //   // clear();
    //   // biome-ignore lint/complexity/noForEach: <explanation>
    //   seats.forEach((seat) => {
    //     const [performID, x, y] = seat.split('#');
    //     toggleSeat({ x: Number(x), y: Number(y) }, true);
    //   });
    // }

    // function onPickSeat(seats: string[]) {
    //   // biome-ignore lint/complexity/noForEach: <explanation>
    //   seats.forEach((seat) => {
    //     const [performID, x, y] = seat.split('#');
    //     toggleSeat({ x: Number(x), y: Number(y) }, true);
    //   });
    // }

    myfetch<
      Array<{
        id: string;
        x: number;
        y: number;
      }>
    >(
      `http://khoakomlem-internal.ddns.net:9999/api/v1/pick-seat/223be080-6ae8-4b5e-b43d-511ed727a91a`
    )
      .then(async (seats) => {
        setLoading(false);
        // biome-ignore lint/complexity/noForEach: <explanation>
        seats.forEach((seat) => {
          toggleSeat({ x: seat.x, y: seat.y }, true);
        });
      })
      .catch(console.error);

    function onSeatAdd(seats: Array<`${string}#${string}#${string}`>) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      seats.forEach((seat) => {
        const [performID, x, y] = seat.split('#');
        toggleSeat({ x: Number(x), y: Number(y) }, true);
      });
    }

    function onSeatRemove(seats: Array<`${string}#${string}#${string}`>) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      seats.forEach((seat) => {
        const [performID, x, y] = seat.split('#');
        toggleSeat({ x: Number(x), y: Number(y) }, false);
      });
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    // socket.on('update-seats', onFooEvent2);
    // socket.on('pick-seat', onPickSeat);
    socket.on('seat-add', onSeatAdd);
    socket.on('seat-remove', onSeatRemove);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      // socket.off('update-seats', onFooEvent);
      // socket.off('pick-seat', onPickSeat);
      socket.off('seat-add', onSeatAdd);
      socket.off('seat-remove', onSeatRemove);
    };
  }, []);

  const width = 20;

  if (loading) return 'Loading seats....';

  return (
    <div
      className={cn(
        'Main max-w-[80%] mx-auto border-[2px] border-solid border-[#d4d3c9]'
      )}
    >
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
      <div className='w-full flex mb-5'>
        <Button className='mt-[40px] w-[200px] mx-auto'>Đặt vé</Button>
      </div>
    </div>
  );
}
