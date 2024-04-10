import React from 'react';

import { cn } from '@/utils/common';

export function Chair({ color }: { readonly color: string }) {
  return (
    <div className={cn('Table', `Table_${color}`, "w-[22px] h-[22px] text-center text-[12px] text-[#222] leadding-[18px] border-[1px] hover:bg-[#b11500]")}>
      Axx
    </div>
  );
}
