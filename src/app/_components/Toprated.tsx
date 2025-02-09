"use client";
import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieType } from "@/utils/types";
import { MainPageCardsSkeleton } from "../skeletons/MainPageSkeleton";

export const Toprated = () => {
  const [data, setData] = useState<MovieType>();

  useEffect(() => {
    const fetchData = async () => {
      const topRated = await getData(`/movie/top_rated?language=en-US&page=1`);
      setData(topRated);
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="max-w-[1280px] m-auto mt-[52px]">
          <Link href={`category?category=${"top_rated"}`}>
            <CardsTop text="Top Rated" />
          </Link>
          <Cards data={data.results} />
        </div>
      ) : (
        <MainPageCardsSkeleton />
      )}
    </>
  );
};
