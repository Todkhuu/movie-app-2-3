"use client";
import { getData } from "@/utils/data";
import { ResultsType } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { DialogDemo } from "@/components/DialogTrailer";
import Link from "next/link";
import { UpcomingTopSkeleton } from "../skeletons/MainPageSkeleton";

export const UpcomingTop = () => {
  const [upcomig, setUpcoming] = useState<ResultsType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const upComing = await getData(`/movie/upcoming?language=en-US&page=1`);
      setUpcoming(upComing.results || []);
    };
    fetchData();
  }, []);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      {upcomig ? (
        <Carousel
          plugins={[plugin.current]}
          className="w-[100vw] h-[600px] mt-[24px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {upcomig?.slice(0, 4).map((movie: ResultsType) => {
              return (
                <CarouselItem className="relative" key={movie.id}>
                  <Link href={`/movie-detail/${movie.id}`}>
                    <Card
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                      }}
                      className="w-[100%] h-[600px] bg-center bg-cover rounded-none"
                    >
                      <CardContent className="h-[100%] ml-[140px] flex flex-col justify-center p-0 text-white">
                        <p className="text-[16px]">Now Playing:</p>
                        <h2 className="text-[36px] font-bold leading-none">
                          {movie.title}
                        </h2>
                        <div className="flex items-center gap-[4px] mt-[10px] ">
                          <FaStar className="w-[28px] h-[28px] fill-yellow-400" />
                          <div className="text-[18px] font-medium">
                            {movie.vote_average.toFixed(1)}
                            <span className="text-[16px] font-normal text-[#71717a]">
                              /10
                            </span>
                          </div>
                        </div>
                        <p className="w-[302px] text-[12px] my-[16px]">
                          {movie.overview}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <div className="absolute bottom-[110px] left-[155px] z-50">
                    <DialogDemo ids={movie?.id.toString()} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absoulte ml-[80px]" />
          <CarouselNext className="absoulte mr-[80px]" />
        </Carousel>
      ) : (
        <UpcomingTopSkeleton />
      )}
    </>
  );
};
