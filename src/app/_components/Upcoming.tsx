"use client";
import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";
import Link from "next/link";
import { MainPageCardsSkeleton } from "../skeletons/MainPageSkeleton";
import { useEffect, useState } from "react";
import { MovieType } from "@/utils/types";

export const Upcoming = () => {
  const [data, setData] = useState<MovieType>(); // Skeleton nemehiin tuld zaaval use client bolgoson

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`/movie/upcoming?language=en-US&page=1`);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {!data ? (
        <MainPageCardsSkeleton />
      ) : (
        <div className="max-w-[1280px] m-auto mt-[52px]">
          <Link href={`/category?category=${"upcoming"}`}>
            <CardsTop text={"Upcoming"} />
          </Link>
          <Cards data={data.results} />
        </div>
      )}
    </>
  );
};
