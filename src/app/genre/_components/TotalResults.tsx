import { getData } from "@/utils/data";
import { GenreType, MovieType } from "@/utils/types";
import { useEffect, useState } from "react";

export const TotalResults = ({
  movies,
  genreIds,
}: {
  movies: MovieType | null;
  genreIds: string;
}) => {
  const [genres, setGenres] = useState<GenreType[] | null>(null);

  useEffect(() => {
    const data = async () => {
      const dataGenres = await getData("/genre/movie/list?language=en");
      setGenres(dataGenres.genres || []);
    };
    data();
  }, []);
  return (
    <h2 className="text-[20px] font-semibold mb-[32px] flex gap-[5px]">
      {movies?.total_results} titles in
      {genres
        ?.filter((genre: GenreType) => genre.id.toString() == genreIds)
        .map((genre: GenreType, index: number) => (
          <p key={index}>{genre.name}</p>
        ))}
    </h2>
  );
};
