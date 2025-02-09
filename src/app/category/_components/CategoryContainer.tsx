"use client";

import { CategorySkeleton } from "@/app/skeletons/CategorySkeleton";
import { Paginations } from "@/components/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import Star from "@/icons/StarIcon";
import { getData } from "@/utils/data";
import { ResultsType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const CategoryContainer = () => {
  const [data, setData] = useState<ResultsType[]>();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const page = String(searchParams.get("page") || 1);

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getData(
        `/movie/${category}?language=en-US&page=${page}`
      );
      setData(datas.results);
    };
    fetchData();
  }, [page, category]);
  return (
    <>
      {data ? (
        <div className="max-w-[1280px] m-auto mt-[52px]">
          <h2 className="text-[30px] font-semibold">
            {category == "upcoming" ? "Upcoming" : ""}
            {category == "popular" ? "Popular" : ""}
            {category == "top_rated" ? "Top Rated" : ""}
          </h2>
          <div className="flex flex-wrap gap-[31px] mt-[32px]">
            {data?.slice(0, 10).map((movie: ResultsType) => {
              return (
                <Link key={movie.id} href={`/movie-detail/${movie.id}`}>
                  <Card className="w-[229px] h-[439px] overflow-hidden bg-secondary">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      width={229}
                      height={340}
                      alt=""
                    />
                    <CardContent className="p-2">
                      <div className="flex items-center gap-[4px] ">
                        <Star />
                        <div className="text-[14px] font-medium">
                          {movie.vote_average.toFixed(1)}
                          <span className="text-[12px] font-normal text-[#71717a]">
                            /10
                          </span>
                        </div>
                      </div>
                      <h3 className="text-[18px] mt-[8px]">{movie.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Paginations page={page} />
        </div>
      ) : (
        <CategorySkeleton />
      )}
    </>
  );
};
