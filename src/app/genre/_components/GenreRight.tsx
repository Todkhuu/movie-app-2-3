"use client";
import { getData } from "@/utils/data";
import { MovieType } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Paginations } from "@/components/Pagination";
import { TotalResults } from "./TotalResults";
import { GenreCards } from "./GenreCards";

export default function GenreRight() {
  const [movies, setMovies] = useState<MovieType | null>(null);
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genreIds") || "";
  const page = (searchParams.get("page") || 1)?.toString();

  useEffect(() => {
    const data = async () => {
      const dataMovie = await getData(
        `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
      );
      setMovies(dataMovie);
    };
    data();
  }, [genreIds, page]);

  return (
    <div className="border-l-[1px] pl-[16px]">
      <TotalResults movies={movies} genreIds={genreIds} />
      <GenreCards movies={movies} />
      <Paginations page={page} />
    </div>
  );
}
