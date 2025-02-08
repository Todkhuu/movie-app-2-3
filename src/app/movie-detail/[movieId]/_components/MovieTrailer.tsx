import { DialogDemo } from "@/components/DialogTrailer";
import { OneMovie } from "@/utils/types";
import Image from "next/image";

export const MovieTrailer = ({
  movie,
  id,
}: {
  movie: OneMovie;
  id: string;
}) => {
  return (
    <div className="flex justify-between mt-[24px]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        width={290}
        height={428}
        alt=""
        className="w-[290px] h-[428px] rounded-sm"
      />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
        className="w-[760px] h-[428px] rounded-sm bg-center bg-cover flex items-end p-[24px]"
      >
        <DialogDemo id={id} />
      </div>
    </div>
  );
};
