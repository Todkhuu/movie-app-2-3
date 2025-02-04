"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Star from "@/icons/StarIcon";
import { getData } from "@/utils/data";
import { GenreType, MovieType, ResultsType } from "@/utils/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function GenrePage() {
  const [genres, setGenres] = useState<GenreType[] | null>(null);
  const [movies, setMovies] = useState<MovieType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
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
        `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
      );
      setMovies(dataMovie || []);
    };
    data();
  }, [genreIds, page]);

  const clickHandler = (genreIds: string[]) => {
    router.push(`?page=${page}&genreIds=${genreIds}`);
  };

  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search filter</h2>
      <div className="flex mt-[32px]">
        <div className="w-[403px] mr-[16px]">
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
        <div className="border-l-[1px] pl-[16px]">
          <h2 className="text-[20px] font-semibold mb-[32px] flex gap-[5px]">
            {movies?.total_results} titles in
            {genres
              ?.filter((genre: GenreType) => genre.id.toString() == genreIds)
              .map((genre: GenreType, index: number) => (
                <p key={index}>{genre.name}</p>
              ))}
          </h2>
          <div className="w-[877px] flex flex-wrap gap-[13px]">
            {movies?.results.map((movie: ResultsType, index: number) => (
              <Link key={index} href={`/movie-detail/${movie.id}`}>
                <Card className="w-[165px] h-[331px] overflow-hidden bg-secondary">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    width={100}
                    height={100}
                    alt=""
                    className="w-[100%] h-[244px]"
                  />
                  <CardContent className="p-[6px]">
                    <div className="flex items-center gap-[4px] ">
                      <Star />
                      <div className="text-[14px] font-medium mb-[4px]">
                        {movie.vote_average.toFixed(1)}
                        <span className="text-[12px] font-normal text-[#71717a]">
                          /10
                        </span>
                      </div>
                    </div>
                    <p className="text-[16px]">{movie.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Pagination className="my-[32px]">
            <PaginationContent>
              {Number(page) > 1 ? (
                <>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        router.push(
                          `?page=${
                            Number(page) > 1 ? Number(page) - 1 : ""
                          }&genreIds=${genreIds}`
                        )
                      }
                    />
                  </PaginationItem>
                  <PaginationItem
                    onClick={() =>
                      router.push(
                        `?page=${
                          Number(page) > 1 ? Number(page) - 1 : ""
                        }&genreIds=${genreIds}`
                      )
                    }
                  >
                    <PaginationLink>{Number(page) - 1}</PaginationLink>
                  </PaginationItem>
                </>
              ) : (
                ""
              )}
              <PaginationItem>
                <PaginationLink isActive>{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem
                onClick={() =>
                  router.push(`?page=${Number(page) + 1}&genreIds=${genreIds}`)
                }
              >
                <PaginationLink>{Number(page) + 1}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {Number(page) < 10 ? (
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      router.push(
                        `?page=${Number(page) + 1}&genreIds=${genreIds}`
                      )
                    }
                  />
                </PaginationItem>
              ) : (
                ""
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
