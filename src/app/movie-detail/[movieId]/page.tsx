import { getData } from "@/utils/data";
import { LuDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MoviePage = async ({
  params: { movieId },
}: {
  params: { movieId: string };
}) => {
  const movie = await getData(`/movie/${movieId}?language=en-US`);
  const trailer = await getData(`/movie/${movieId}/videos?language=en-US`);
  console.log("movie", movie);
  console.log("trailer", trailer);
  return (
    <div className="max-w-[1080px] m-auto mt-[52px]">
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
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-[12px]">
                <Button
                  variant={"outline"}
                  className="w-[40px] h-[40px] rounded-full bg-secondary"
                >
                  <CiPlay1 className="w-[16px] h-[16px] fill-secondary-foreground" />
                </Button>
                <DialogTitle className="text-white text-[16px] font-normal">
                  Play Trailer
                </DialogTitle>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[996px] h-[561px]">
              <DialogTitle></DialogTitle>
              <iframe
                width="996"
                height="561"
                src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default MoviePage;
