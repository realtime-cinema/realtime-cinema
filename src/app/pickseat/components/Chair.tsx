import React from 'react';

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
  const isSelected = usePickSeat((state) =>
    state.seats.some((s) => s[0] === data.x && s[1] === data.y)
  );

  return (
    <div
      className={cn(
        'Table',
        `Table_${color}`,
        'w-[22px] h-[22px] text-center text-[12px] text-[#222] leadding-[18px] border-[1px] hover:bg-[#b11500] cursor-pointer',
        {
          'bg-[#b11500] text-white': isSelected,
        }
      )}
    >
      Axx
    </div>
  );
}
