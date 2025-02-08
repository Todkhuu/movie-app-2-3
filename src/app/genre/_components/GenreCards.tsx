import { Card, CardContent } from "@/components/ui/card";
import Star from "@/icons/StarIcon";
import { MovieType, ResultsType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export const GenreCards = ({ movies }: { movies: MovieType | null }) => {
  return (
    <div className="w-[877px] flex flex-wrap gap-[13px]">
      {movies?.results.map((movie: ResultsType, index: number) => (
        <Link key={index} href={`/movie-detail/${movie.id}`}>
          <Card className="w-[165px] h-[331px] overflow-hidden bg-secondary">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              width={100}
              height={100}
              alt=""
              className="w-[100%] h-[244px]"
            />
            <CardContent className="p-[6px]">
              <div className="flex items-center gap-[4px] ">
                <Star />
                <div className="text-[14px] font-medium">
                  {movie.vote_average.toFixed(1)}
                  <span className="text-[12px] font-normal text-[#71717a]">
                    /10
                  </span>
                </div>
              </div>
              <p className="text-[16px]">{movie.title}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
