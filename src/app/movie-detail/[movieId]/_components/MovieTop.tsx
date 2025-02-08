import { OneMovie } from "@/utils/types";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export const MovieTop = ({ movie }: { movie: OneMovie }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-[36px] font-bold">{movie.title}</h2>
        <div className="flex items-center text-[18px]">
          <p>{movie.release_date.replaceAll("-", ".")}</p>
          <LuDot />
          <p>{movie.adult ? "R18+" : "PG"}</p>
          <LuDot />
          <p>
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </p>
        </div>
      </div>
      <div>
        <p className="text-[12px]">Rating</p>
        <div className="flex items-center gap-[4px]">
          <FaStar className="w-[28px] h-[28px] fill-yellow-400" />
          <div>
            <div className="text-[18px] font-medium">
              {movie.vote_average.toFixed(1)}
              <span className="text-[16px] font-normal text-[#71717a]">
                /10
              </span>
            </div>
            <p className="text-[12px] text-[#71717a]">{movie.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
