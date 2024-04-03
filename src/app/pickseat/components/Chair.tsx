import React from 'react';

import { cn } from '@/utils/common';

export function Chair({ color }: { readonly color: string }) {
  return (
    <div className={cn('Table', `Table_${color}`, 'triet ngu vl')}>Axx</div>
  );
}
