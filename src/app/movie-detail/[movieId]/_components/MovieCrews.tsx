"use client";
import { MovieCrewsSkeleton } from "@/app/skeletons/MovieDetailSkeleton";
import { getData } from "@/utils/data";
import { Cast, CastCrew, Crew, OneMovie } from "@/utils/types";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";

export const MovieCrews = ({ id, movie }: { id: string; movie: OneMovie }) => {
  const [crews, setCrews] = useState<CastCrew>(); //suuld ni zasna
  const [data, setData] = useState<OneMovie>();

  useEffect(() => {
    const fetchData = async () => {
      const castCrew = await getData(`/movie/${id}/credits?language=en-US`);
      setCrews(castCrew);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setData(movie);
  }, [movie]);

  return (
    <>
      {data && crews ? (
        <div>
          <p className="mt-[20px]">{data.overview}</p>
          <div className="mt-[20px] flex flex-col gap-[20px]">
            <div className="border-b-[1px] pb-[5px] flex">
              <p className="w-[100px]">Director</p>
              {crews?.crew
                .filter((crew: Crew) => crew.job.toLowerCase() === "director")
                .map((director: Crew, index: number) => (
                  <p key={index}>{director.name}</p>
                ))}
            </div>
            <div className="border-b-[1px] pb-[5px] flex">
              <p className="w-[100px]">Writers</p>
              {crews?.crew
                .filter((crew: Crew) => crew.job.toLowerCase().includes("writ"))
                .map((writer: Crew, index: number) => (
                  <p key={index}>{writer.name}</p>
                ))}
            </div>
            <div className="border-b-[1px] pb-[5px] flex">
              <p className="w-[100px]">Stars</p>
              <div className="flex">
                {crews?.cast.slice(0, 5).map((star: Cast) => {
                  return (
                    <p key={star.id} className="flex items-center">
                      {star.name} <LuDot />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MovieCrewsSkeleton />
      )}
    </>
  );
};
