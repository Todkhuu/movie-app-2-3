"use client";
import { Paginations } from "@/components/Pagination";
import { ToggleGroups } from "@/components/Togglegroup";
import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/utils/data";
import { ResultsType, Search } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const SearchPage = () => {
  const [searchMovies, setSearchMovies] = useState<Search | null>(null);
  const [filtered, setFiltered] = useState<ResultsType[] | undefined>();
  const searchParams = useSearchParams();

  const value = searchParams.get("value") || "";
  const page = (searchParams.get("page") || 1).toString();
  const genreIds = searchParams.get("genreIds") || "";

  useEffect(() => {
    const getSearchData = async () => {
      const searchData = await getData(
        `/search/movie?query=${value}&language=en-US&page=${page}`
      );
      setSearchMovies(searchData || []);
    };
    getSearchData();
  }, [value, page]);

  useEffect(() => {
    const filter = genreIds
      ? searchMovies?.results.filter((movie: ResultsType) =>
          movie.genre_ids.some((id) => genreIds?.includes(id.toString()))
        )
      : searchMovies?.results;
    setFiltered(filter);
  }, [searchMovies?.results, genreIds]);

  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search results</h2>
      <div className="flex mt-[32px]">
        <div className="w-full border-r-[1px] mr-[28px]">
          <p className="text-[20px] font-semibold">
            {searchMovies?.total_results} results for {value}
          </p>
          <div className="flex flex-wrap gap-[48px] mt-[32px]">
            {filtered?.map((movie: ResultsType) => {
              return (
                <Link key={movie.id} href={`/movie-detail/${movie.id}`}>
                  <Card className="w-[165px] h-[331px] overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      width={165}
                      height={244}
                      alt=""
                    />
                    <CardContent className="py-1 px-2">
                      <div className="flex items-center gap-[4px] ">
                        <FaStar className="w-[16px] h-[16px] fill-yellow-400" />
                        <div className="text-[12px] font-medium">
                          {movie.vote_average.toFixed(1)}
                          <span className="text-[12px] font-normal text-[#71717a]">
                            /10
                          </span>
                        </div>
                      </div>
                      <h3 className="text-[18px]">{movie.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Paginations page={page} />
        </div>
        <div className="max-w-[403px]">
          <ToggleGroups set={false} />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
