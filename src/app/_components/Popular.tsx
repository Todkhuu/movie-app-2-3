import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";
import Link from "next/link";

export const Popular = async () => {
  const popular = await getData(`/movie/popular?language=en-US&page=1`);
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <Link href={`/category?category=${"popular"}`}>
        <CardsTop text={"Popular"} />
      </Link>
      <Cards data={popular.results} />
    </div>
  );
};
