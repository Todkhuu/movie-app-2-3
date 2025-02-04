import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { getData } from "@/utils/data";
import { GenreType } from "@/utils/types";
import { MdChevronRight } from "react-icons/md";
import Link from "next/link";

export const Popovers = async () => {
  const dataGenre = await getData("/genre/movie/list?language=en");
  console.log("genre", dataGenre);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <IoIosArrowDown /> Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[577px] h-auto p-[20px]">
        <div className="border-b-[1px] border-[#E4E4E7] pb-[16px]">
          <h2 className="text-[24px] font-semibold">Genres</h2>
          <p className="text-[16px]">See lists of movies by genre</p>
        </div>
        <div className="flex gap-[16px] flex-wrap mt-[16px]">
          {dataGenre.genres?.map((genre: GenreType, index: number) => {
            return (
              <Link
                key={index}
                href={`/genre-detail?page=1&genreIds=${genre?.id}`}
              >
                <Button
                  className="h-[20px] px-0 pl-[10px] pr-[4px] rounded-full text-[12px] font-semibold"
                  variant={"outline"}
                >
                  {genre.name}
                  <MdChevronRight />
                </Button>
              </Link>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
