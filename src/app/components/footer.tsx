import type { JSX } from 'react';

export function Footer(): JSX.Element {
  return (
    <div className='bg-gray-800 text-white text-center p-4'>
      <p className='text-xs'>
        &copy; 2024 Trat Dien ITMC. All rights reserved.
      </p>
    </div>
  );
}
