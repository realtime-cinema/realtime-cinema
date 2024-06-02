"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { filmInstance } from "@/tanstack-query/film/film.class";
import type { FilmDetail } from "@/tanstack-query/film/film.type";
import { CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Navbar, NavbarItem, NavBarLink } from "./components/navbar";
import { PosterFilm } from "./film/components/PosterFilm";

export default function Home() {
  const [films, setFilms] = useState<FilmDetail[]>([]);
  useEffect(() => {
    filmInstance
      .getAll()
      .then((data) => {
        console.log(data);
        setFilms(data);
      })
      .catch(console.error);
  }, []);

  // console.log(films);
  return (
    <div className="flex flex-col">
      <DatMuaVeXemPhim />
      <PhimDangChieu films={films} />
    </div>
  );
}

function Checked({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center gap-x-2 text-sm">
      <CheckCircle className="w-5 h-5 fill-red-200 stroke-red-500" />
      {children}
    </div>
  );
}

function DatMuaVeXemPhim() {
  return (
    <div className="flex w-full bg-red-100">
      <div className="flex flex-row items-center gap-x-8 mx-auto py-6">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-2xl font-bold text-pink-500">
            Đặt mua vé xem phim TratDien
          </h1>
          <Checked>
            Mua vé Online, <b>Trải nghiệm phim hay</b>
          </Checked>
          <Checked>
            <b>Đặt vé an toàn</b> trên TratDien
          </Checked>

          <Checked>
            Tha hồ <b>chọn chỗ ngồi, mua bắp nước</b> tiện lợi
          </Checked>

          <Checked>
            <b>Lịch sử đặt vé</b> được lưu lại ngay
          </Checked>

          <Button className="mt-5 w-fit bg-pink-500">Đặt vé ngay</Button>
        </div>
        <Image
          alt="banner1"
          src="/home/banner1.png"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

function PhimDangChieu({
  films,
  className,
}: {
  readonly films: FilmDetail[];
  readonly className?: string;
}) {
  return (
    <div className="flex flex-col gap-y-6 py-6 bg-black">
      <div className="flex flex-col items-center justify-between px-6 gap-y-3">
        <h1 className="text-2xl font-bold">Phim đang chiếu</h1>
        <Carousel
          className={cn("w-full max-w-6xl", className)}
          opts={{ loop: false, dragFree: true }}
        >
          <CarouselContent>
            {films.map((film, index) => (
              <CarouselItem key={film.id} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
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
      </div>
      <div className="flex flex-row gap-x-6 overflow-x-auto" />
    </div>
  );
}
