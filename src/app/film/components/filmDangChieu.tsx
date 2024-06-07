'use client';

import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { type FilmDetail } from '@/tanstack-query/film/film.type';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { PosterFilm } from './PosterFilm';

export function FilmDangChieu({
  films,
  className,
}: {
  readonly films: FilmDetail[];
  readonly className?: string;
}) {
  const posterFilms2 = films.flatMap((a) => [a, a]);

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
