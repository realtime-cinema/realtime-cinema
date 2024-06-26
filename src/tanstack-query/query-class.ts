/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useQuery } from '@tanstack/react-query';

import { myfetch } from './myfetch';

export abstract class QueryClass<Item> {
  abstract endpoint: string;

  async getAll() {
    return myfetch<Item[]>(this.endpoint);
  }

  async getByID(id: string) {
    return myfetch<Item>(`${this.endpoint}/${id}`);
  }

  async add(data: Omit<Item, 'id'>) {
    return myfetch<Item>(this.endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  useGetAll() {
    return useQuery({
      queryKey: [this.endpoint],
      queryFn: async () => this.getAll(),
    });
  }
}
