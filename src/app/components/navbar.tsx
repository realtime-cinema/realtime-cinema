'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export function Navbar({
  className,
  children,
}: {
  readonly className?: string;
  readonly children?: React.ReactNode;
}) {
  return (
    <div className='border-b-[2px] shadow-sm flex flex-row justify-center mx-auto px-16 sm:px-6 lg:px-[20%] py-2'>
      {/* <div className=''>
        <Image src='/logo.jpg' alt='logo' width={20} height={20} />
        <div className='border-1 w-[1px]' />
        <div>Đặt vé xem phim</div>
      </div> */}
      <div className='grow' />
      <div className='flex flex-row'>
        {/* <div>Lịch chiếu</div>
        <div>Rạp chiếu</div>
        <div>Phim chiếu</div>
        <div>Review phim</div>
        <div>Top phim</div>
        <div>BLog phim</div> */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link legacyBehavior passHref href='/docs'>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
              <NavigationMenuContent>
                Item one contentaaaaaaaaaaaaaaaaaaaaaaaaaaa Item one
                contentaaaaaaaaaaaaaaaaaaaaaaaaaaa Item one
                contentaaaaaaaaaaaaaaaaaaaaaaaaaaa Item one
                contentaaaaaaaaaaaaaaaaaaaaaaaaaaa Item one
                contentaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
              <NavigationMenuContent>
                Item two csssssssssssssssont Item two csssssssssssssssontent
                Item two csssssssssssssssontent Item two csssssssssssssssontent
                Item two csssssssssssssssontent Item two csssssssssssssssontent
                ent
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            {children}
          </NavigationMenuList>

          {/* NavigationMenu.Content will be rendered here when active */}
          {/* <NavigationMenuViewport /> */}
        </NavigationMenu>
      </div>
    </div>
  );
}

Navbar.Link = NavBarLink;
export function NavBarLink({
  children,
  href,
}: {
  readonly children: React.ReactNode;
  readonly href: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

Navbar.Item = NavbarItem;
export function NavbarItem({
  children,
  title,
  className,
}: {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (ref.current) {
        setOffsetLeft(ref.current.offsetLeft);
      }
    });
  });
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger ref={ref}>{title}</NavigationMenuTrigger>
      <NavigationMenuContent
        className={cn('p-4 min-w-[540px]', className)}
        // biome-ignore lint/style/useTemplate: <explanation>
        // style={{ left: offsetLeft + 'px' }}
      >
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
