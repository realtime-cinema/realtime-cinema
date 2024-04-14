'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import type { PosterData } from './ComponentData';
import { PosterFilm } from './PosterFilm';

export function FilmDangChieu({
  posterFilms,
  className,
}: {
  readonly posterFilms: PosterData[];
  readonly className?: string;
}) {
  const posterFilms2 = posterFilms.flatMap((a) => [a, a]);

  return (
    <Carousel
      className={cn('w-full max-w-6xl', className)}
      opts={{ loop: false, dragFree: true }}
    >
      <CarouselContent>
        {posterFilms2.map((film, index) => (
          <CarouselItem key={film.id} className='basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <PosterFilm data={film} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
