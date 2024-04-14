const API_URL = 'http://khoakomlem-internal.ddns.net:9999/api/v1/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiaWF0IjoxNzEzMDI0NjQ1LCJleHAiOjE3MTM5MTM2Nzh9.a2em6AbielL-OqbXTki7b9lNSK9prdmVM8saIilmgDA';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function myfetch<T>(endpoint: string, ...args: any[]) {
  const url = new URL(endpoint, API_URL);
  const res = await fetch(url.href, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    ...args[0],
  });
  const { data } = await res.json();
  return data as T;
}
