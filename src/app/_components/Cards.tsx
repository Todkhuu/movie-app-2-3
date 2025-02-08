import { Card, CardContent } from "@/components/ui/card";
import Star from "@/icons/StarIcon";
import { ResultsType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export const Cards = ({ data }: { data: ResultsType[] }) => {
  return (
    <div className="flex flex-wrap mt-[36px] gap-[31px]">
      {data?.slice(0, 10).map((movie) => {
        return (
          <Link href={`/movie-detail/${movie.id}`}>
            <Card className="w-[229px] h-[439px] overflow-hidden bg-secondary">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                width={229}
                height={340}
                alt=""
              />
              <CardContent className="p-2">
                <div className="flex items-center gap-[4px] ">
                  <Star />
                  <div className="text-[14px] font-medium">
                    {movie.vote_average.toFixed(1)}
                    <span className="text-[12px] font-normal text-[#71717a]">
                      /10
                    </span>
                  </div>
                </div>
                <h3 className="text-[18px] mt-[8px]">{movie.title}</h3>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
