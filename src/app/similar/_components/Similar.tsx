"use client";
import { Paginations } from "@/components/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/utils/data";
import { ResultsType } from "@/utils/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Similars = () => {
  const [similars, setSimilars] = useState<ResultsType[] | null>(null);
  const searchParams = useSearchParams();

  const similarId = searchParams.get("similarId") || "";
  const page = (searchParams.get("page") || 1).toString();

  useEffect(() => {
    const data = async () => {
      const data = await getData(
        `/movie/${similarId}/similar?language=en-US&page=${page}`
      );
      setSimilars(data.results || []);
    };
    data();
  }, [similarId, page]);

  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px]">More like this</h2>
      <div className="flex flex-wrap gap-[32px] mt-[32px]">
        {similars?.map((movie: ResultsType) => {
          return (
            <Card
              key={movie.id}
              className="w-[230px] h-[439px] overflow-hidden bg-secondary"
            >
              <Image
                width={239}
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
          );
        })}
      </div>
      <Paginations page={page} />
    </div>
  );
};
export default Similars;
