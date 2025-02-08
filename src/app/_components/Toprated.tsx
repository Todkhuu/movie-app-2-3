import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";
import Link from "next/link";

export const Toprated = async () => {
  const topRated = await getData(`/movie/top_rated?language=en-US&page=1`);
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <Link href={`category?category=${"top_rated"}`}>
        <CardsTop text="Top Rated" />
      </Link>
      <Cards data={topRated.results} />
    </div>
  );
};
