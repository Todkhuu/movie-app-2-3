import { Card, CardContent } from "@/components/ui/card";
import { ResultsType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export const SearchCards = ({
  filtered,
}: {
  filtered: ResultsType[] | undefined;
}) => {
  return (
    <div className="flex flex-wrap gap-[48px] mt-[32px]">
      {filtered?.map((movie: ResultsType) => {
        return (
          <Link key={movie.id} href={`/movie-detail/${movie.id}`}>
            <Card className="w-[165px] h-[331px] overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                width={165}
                height={244}
                alt=""
              />
              <CardContent className="py-1 px-2">
                <div className="flex items-center gap-[4px] ">
                  <FaStar className="w-[16px] h-[16px] fill-yellow-400" />
                  <div className="text-[12px] font-medium">
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
  );
};
