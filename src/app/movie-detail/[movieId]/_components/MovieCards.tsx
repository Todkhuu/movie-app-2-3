"use client";
import { MovieCardsSkeleton } from "@/app/skeletons/MovieDetailSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/utils/data";
import { ResultsType, SimilarType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export const MovieCards = ({ id }: { id: string }) => {
  const [similar, setSimilar] = useState<SimilarType>();

  useEffect(() => {
    const fetchData = async () => {
      const similarMovie = await getData(
        `/movie/${id}/similar?language=en-US&page=1`
      );
      setSimilar(similarMovie);
    };
    fetchData();
  }, []);

  return (
    <>
      {similar ? (
        <div>
          <Link
            href={`/similar?similarId=${id}`}
            className="flex justify-between items-center my-[36px]"
          >
            <h2 className="text-[24px] font-semibold">More like this</h2>
            <Button className="text-[14px]" variant="link">
              See more <GoArrowRight />
            </Button>
          </Link>
          <div className="flex justify-between">
            {similar.results
              .slice(0, 5)
              .map((movie: ResultsType, index: number) => {
                return (
                  <Link key={index} href={`/movie-detail/${movie.id}`}>
                    <Card className="w-[190px] h-[372px] overflow-hidden bg-secondary">
                      <Image
                        width={190}
                        height={281}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                      />
                      <CardContent className="py-1 px-2">
                        <div className="flex items-center gap-[4px] ">
                          <FaStar className="w-[14px] h-[16px] fill-yellow-400" />
                          <div className="text-[14px] font-medium">
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
        </div>
      ) : (
        <MovieCardsSkeleton />
      )}
    </>
  );
};
