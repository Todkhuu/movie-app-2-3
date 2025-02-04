"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchIcon from "@/icons/SearchIcon";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { ResultsType } from "@/utils/types";
import { getData } from "@/utils/data";
import Image from "next/image";
import Star from "@/icons/StarIcon";
import { GoArrowRight } from "react-icons/go";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export const PopoverInput = () => {
  const [movies, setMovies] = useState<ResultsType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const getDatas = async (searchValue: string) => {
      const data = await getData(
        `/search/movie?query=${searchValue}&language=en-US&page=1`
      );
      setMovies(data.results || []);
    };
    getDatas(searchValue);
  }, [searchValue]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <Popover>
      <PopoverTrigger className="w-[379px] h-[36px] flex items-center border-[1px] px-[12px] rounded-[8px] border-secondary">
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search.."
          className="ml-[10px] border-none focus-visible:ring-0 shadow-none "
          value={searchValue}
          onChange={changeHandler}
        />
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[577px] p-[12px]"
      >
        {movies?.length > 0
          ? movies?.slice(0, 5).map((movie: ResultsType, index: number) => {
              return (
                <Link key={index} href={`/movie-detail/${movie.id}`}>
                  <div className="border-b-[1px] border-[#e4e4e7] py-[8px]">
                    <Card className="w-[553px] h-[116px] p-[8px] flex gap-[16px] hover:bg-secondary border-none shadow-none">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        width={100}
                        height={100}
                        alt=""
                        className="w-[67px] rounded-[6px]"
                      />
                      <CardContent className="w-[100%] p-0">
                        <h2 className="text-[20px] font-semibold">
                          {movie.title}
                        </h2>
                        <div className="flex items-center gap-[4px] ">
                          <Star />
                          <div className="text-[14px] font-medium">
                            {movie.vote_average.toFixed(1)}
                            <span className="text-[12px] font-normal text-[#71717a]">
                              /10
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-[14px]">
                            {movie.release_date.slice(0, 4)}
                          </p>
                          <Button className="text-[14px]" variant="link">
                            See more <GoArrowRight />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              );
            })
          : ""}
        <Link href={``} className="flex gap-2 p-[16px]">
          <p>See all results for</p>
          {searchValue}
        </Link>
      </PopoverContent>
    </Popover>
  );
};
