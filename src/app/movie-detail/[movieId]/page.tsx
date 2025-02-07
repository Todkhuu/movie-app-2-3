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
import { Cast, Crew, OneMovieGenre, ResultsType } from "@/utils/types";
import { GoArrowRight } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const movie = await getData(`/movie/${movieId}?language=en-US`);
  const trailer = await getData(`/movie/${movieId}/videos?language=en-US`);
  const castCrew = await getData(`/movie/${movieId}/credits?language=en-US`);
  const similarMovie = await getData(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );
  console.log("movie", movie);
  console.log("trailer", trailer);
  console.log("cast", castCrew);
  console.log("similar", similarMovie);
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
            <DialogTrigger asChild>
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
            <DialogContent className="max-w-[996px] h-[561px] p-0 overflow-hidden">
              <iframe
                width="996"
                height="561"
                src={`https://www.youtube.com/embed/${trailer.results[0]?.key}`}
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {movie.genres.map((movie: OneMovieGenre, index: number) => (
          <Button
            key={index}
            className="text-[12px] font-semibold h-[18px] px-[10px] bg-transparent border-[1px] focus:text-secondary text-secondary-foreground rounded-full mr-[12px] mt-[32px]"
          >
            {movie.name}
          </Button>
        ))}
        <p className="mt-[20px]">{movie.overview}</p>
      </div>
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
      <div>
        <Link
          href={`/similar?similarId=${movieId}`}
          className="flex justify-between items-center my-[36px]"
        >
          <h2 className="text-[24px] font-semibold">More like this</h2>
          <Button className="text-[14px]" variant="link">
            See more <GoArrowRight />
          </Button>
        </Link>
        <div className="flex justify-between">
          {similarMovie.results
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
    </div>
  );
};
export default MoviePage;
