const API_URL = "http://khoakomlem-internal.ddns.net:9999/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzNDU2IiwiaWF0IjoxNzE3MzEyMDkxLCJleHAiOjE3MTgyMDExMjR9.09LKnN5lBIIWxu43lD5aQ3OA3e104lqvGQcEDahGMXE";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function myfetch<T>(endpoint: string, ...args: any[]) {
  const url = new URL(endpoint, API_URL);
  const res = await fetch(url.href, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    ...args[0],
  });
  const { data } = await res.json();
  return data as T;
}
