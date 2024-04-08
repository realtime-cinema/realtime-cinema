"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { type PosterData } from "./ComponentData";
import PosterFilm from "./PosterFilm";

type Props = {
  readonly posterFilms: PosterData[];
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        width: "30px",
      }}
      onClick={() => onClick()}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        width: "30px",
      }}
      onClick={() => onClick()}
    />
  );
}

export default function FilmDangChieu({ posterFilms }: Props) {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    [],
  );

  const posterFilms2 = posterFilms.map((a) => [a, a]).flat();

  return (
    <div className=" bg-[url('/bg.jpg')] h-[500px]">
      <div className="mb-5 text-center font-bold text-3xl">Phim đang chiếu</div>
      <div className="w-[80%] m-auto">
        <Slider {...settings} className="drag-none" draggable={false}>
          {posterFilms2.map((posterFilm) => (
            <PosterFilm key={posterFilm.id} posterfilm={posterFilm} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
