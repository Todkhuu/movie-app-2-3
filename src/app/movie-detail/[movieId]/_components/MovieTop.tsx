"use client";
import { MovieTopSkeleton } from "@/app/skeletons/MovieDetailSkeleton";
import { OneMovie } from "@/utils/types";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export const MovieTop = ({ movie }: { movie: OneMovie }) => {
  const [data, setData] = useState<OneMovie>();
  useEffect(() => {
    setData(movie);
  }, [movie]);
  return (
    <>
      {data ? (
        <div className="flex justify-between">
          <div>
            <h2 className="text-[36px] font-bold">{data.title}</h2>
            <div className="flex items-center text-[18px]">
              <p>{data.release_date.replaceAll("-", ".")}</p>
              <LuDot />
              <p>{data.adult ? "R18+" : "PG"}</p>
              <LuDot />
              <p>
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </p>
            </div>
          </div>
          <div>
            <p className="text-[12px]">Rating</p>
            <div className="flex items-center gap-[4px]">
              <FaStar className="w-[28px] h-[28px] fill-yellow-400" />
              <div>
                <div className="text-[18px] font-medium">
                  {data.vote_average.toFixed(1)}
                  <span className="text-[16px] font-normal text-[#71717a]">
                    /10
                  </span>
                </div>
                <p className="text-[12px] text-[#71717a]">{data.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MovieTopSkeleton />
      )}
    </>
  );
};
