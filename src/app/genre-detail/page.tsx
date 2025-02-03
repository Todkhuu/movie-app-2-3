"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getData } from "@/utils/data";
import { GenreType, ResultsType } from "@/utils/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function GenrePage() {
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [movies, setMovies] = useState<ResultsType[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds");
  useEffect(() => {
    const data = async () => {
      const dataGenres = await getData("/genre/movie/list?language=en");
      setGenres(dataGenres.genres || []);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const dataMovie = await getData(
        `/discover/movie?language=en&with_genres=${genreIds}&page=${1}`
      );
      setMovies(dataMovie.results || []);
    };
    data();
  }, []);

  const clickHandler = (genreIds: string[]) => {
    router.push(`?page=1&genreIds=${genreIds}`);
  };
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search filter</h2>
      <div className="flex mt-[32px]">
        <div className="w-[387px]">
          <h2 className="text-[24px] font-semibold">Genres</h2>
          <p className="text-[16px] mb-[20px]">See lists of movies by genre</p>
          <ToggleGroup
            type="multiple"
            className="flex gap-[16px] flex-wrap justify-start"
            onValueChange={clickHandler}
          >
            {genres?.map((genre: GenreType, index: number) => (
              <ToggleGroupItem
                key={index}
                value={genre.id.toString()}
                className="h-[20px] px-0 pl-[10px] pr-[4px] rounded-full text-[12px] font-semibold border-[1px]"
              >
                {genre.name}
                <MdChevronRight />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div>
          <h2>titles in </h2>
          <div>
            {movies?.map((movie: ResultsType, index: number) => (
              <Card key={index}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  width={100}
                  height={100}
                  alt=""
                />
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
