import { useQuery } from '@tanstack/react-query';

import { FilmClass } from './film.class';

const filmInstance = new FilmClass();

export const useGetAll = () => useQuery;
