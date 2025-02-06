import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/utils/data";
import { ResultsType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Similar = async ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const similarMovie = await getData(
    `/movie/${categoryId}/similar?language=en-US&page=1`
  );
  console.log(similarMovie);
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <h2 className="text-[30px] font-semibold mb-[32px]">More like this</h2>
      <div className="flex flex-wrap gap-[32px]">
        {similarMovie?.results.map((movie: ResultsType, index: number) => {
          return (
            <Link key={index} href={`/movie-detail/${movie.id}`}>
              <Card className="w-[230px] h-[439px] overflow-hidden bg-secondary">
                <Image
                  width={230}
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
  );
};
export default Similar;
