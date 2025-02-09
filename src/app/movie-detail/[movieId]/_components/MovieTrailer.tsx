"use client";
import { MovieTrailerSkeleton } from "@/app/skeletons/MovieDetailSkeleton";
import { DialogDemo } from "@/components/DialogTrailer";
import { OneMovie } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MovieTrailer = ({
  movie,
  id,
}: {
  movie: OneMovie;
  id: string;
}) => {
  const [data, setData] = useState<OneMovie>();

  useEffect(() => {
    setData(movie);
  }, [movie]);

  return (
    <>
      {data ? (
        <div className="flex justify-between mt-[24px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            width={290}
            height={428}
            alt=""
            className="w-[290px] h-[428px] rounded-sm"
          />
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            }}
            className="w-[760px] h-[428px] rounded-sm bg-center bg-cover flex items-end p-[24px]"
          >
            <DialogDemo ids={id} />
          </div>
        </div>
      ) : (
        <MovieTrailerSkeleton />
      )}
    </>
  );
};
