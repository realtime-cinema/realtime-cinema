'use client';

import { QueryClass } from '../query-class';
import type { FilmDetail } from './film.type';

export class FilmClass extends QueryClass<FilmDetail> {
  endpoint = 'films';
}
