'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import { Navbar, NavbarItem, NavBarLink } from './navbar';

export function Header(): JSX.Element {
  return (
    <Navbar>
      <NavbarItem title='Lịch chiếu' className=''>
        <div className='flex flex-col mx-auto'>
          <Link
            href='#'
            className={cn(navigationMenuTriggerStyle(), 'w-full justify-start')}
          >
            Phim đang chiếu
          </Link>
          <Link
            href='#'
            className={cn(navigationMenuTriggerStyle(), 'w-full justify-start')}
          >
            Phim sắp chiếu
          </Link>
        </div>
      </NavbarItem>
      <NavbarItem title='Rạp chiếu'>Lịch chiếu</NavbarItem>
      <NavBarLink href='#'>Phim chiếu</NavBarLink>
      <NavBarLink href='#'>Top phim</NavBarLink>
      <NavbarItem title='Blog phim'>
        asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd
        asdasd
      </NavbarItem>
    </Navbar>
  );
}
