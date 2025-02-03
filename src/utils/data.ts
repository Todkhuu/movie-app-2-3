import { token } from "./token";

export const getData = async (url: string) => {
  const response = await fetch(`https://api.themoviedb.org/3${url}}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
