'use client';

import { posterfilms } from './components/ComponentData';
import { FilmDangChieu } from './components/filmDangChieu';

export default function FilmPageList() {
  return (
    <div className='flex flex-col'>
      <h1>Film Page List</h1>
      <FilmDangChieu className='mx-auto' posterFilms={posterfilms} />
    </div>
  );
}
