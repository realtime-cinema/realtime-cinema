'use client';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function myfetch<T>(endpoint: string, ...args: any[]) {
  const url = new URL(endpoint, process.env.API_URL);
  const res = await fetch(url.href, ...args);
  const data = await res.json();
  return data as T;
}
