'use client';

import React, { useEffect } from 'react';
import { myfetch } from '@/tanstack-query/myfetch';

import { socket } from '@/lib/socket.io-client';
import { cn } from '@/utils/common';
import { usePickSeat } from '@/hooks/usePickSeat';

export function Chair({
  color,
  data,
}: {
  readonly color: string;
  readonly data: {
    x: number;
    y: number;
  };
}) {
  const perform = '223be080-6ae8-4b5e-b43d-511ed727a91a';
  const isSelected = usePickSeat((state) =>
    state.seats.some((s) => s[0] === data.x && s[1] === data.y)
  );
  const handleClick = () => {
    // socket.emit('refresh');
    // return;

    if (isSelected) {
      // request nhả ghế
      myfetch(`pick-seat/${perform}`, {
        method: 'DELETE',
        body: JSON.stringify([
          {
            x: data.x,
            y: data.y,
          },
        ]),
      }).catch(console.error);
    } else {
      // request chọn ghế
      myfetch(`pick-seat/${perform}`, {
        method: 'POST',
        body: JSON.stringify([
          {
            x: data.x,
            y: data.y,
          },
        ]),
      }).catch(console.error);
    }
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={cn(
        'Table',
        `Table_${color}`,
        'w-[22px] h-[22px] text-center text-[12px] text-[#222] leadding-[18px] border-[1px] hover:bg-[#b11500] cursor-pointer',
        {
          'bg-[#b11500] text-white': isSelected,
        }
      )}
      onClick={handleClick}
    >
      Axx
    </div>
  );
}
