import { getData } from "@/utils/data";
import { Cast, Crew } from "@/utils/types";
import { LuDot } from "react-icons/lu";

export const MovieCrews = async ({ id }: { id: string }) => {
  const castCrew = await getData(`/movie/${id}/credits?language=en-US`);
  return (
    <div className="mt-[20px] flex flex-col gap-[20px]">
      <div className="border-b-[1px] pb-[5px] flex">
        <p className="w-[100px]">Director</p>
        {castCrew.crew
          .filter((crew: Crew) => crew.job.toLowerCase() === "director")
          .map((director: Crew, index: number) => (
            <p key={index}>{director.name}</p>
          ))}
      </div>
      <div className="border-b-[1px] pb-[5px] flex">
        <p className="w-[100px]">Writers</p>
        {castCrew.crew
          .filter((crew: Crew) => crew.job.toLowerCase().includes("writ"))
          .map((writer: Crew, index: number) => (
            <p key={index}>{writer.name}</p>
          ))}
      </div>
      <div className="border-b-[1px] pb-[5px] flex">
        <p className="w-[100px]">Stars</p>
        <div className="flex">
          {castCrew.cast.slice(0, 5).map((star: Cast) => {
            return (
              <p key={star.id} className="flex items-center">
                {star.name} <LuDot />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
