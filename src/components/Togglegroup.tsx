"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getData } from "@/utils/data";
import { GenreType } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";

export const ToggleGroups = ({ set }: { set: boolean }) => {
  const [genres, setGenres] = useState<GenreType[] | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const genreIds = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
  const value = searchParams.get("value") || null;

  useEffect(() => {
    const data = async () => {
      const dataGenres = await getData("/genre/movie/list?language=en");
      setGenres(dataGenres.genres || []);
    };
    data();
  }, []);

  const clickHandler = (genreId: string[]) => {
    if (genreIds) {
    }
    if (set) {
      router.push(`/genre?page=${page}&genreIds=${genreId}`);
    } else {
      router.push(`?page=${page}&genreIds=${genreId}&value=${value}`);
    }
  };

  return (
    <div className="w-full mr-[16px]">
      <h2 className="text-[24px] font-semibold">Genres</h2>
      <p className="text-[16px] mb-[20px]">See lists of movies by genre</p>
      <ToggleGroup
        type="multiple"
        className="flex gap-[16px] flex-wrap justify-start"
        onValueChange={clickHandler}
        value={genreIds?.split(",")}
      >
        {genres?.map((genre: GenreType, index: number) => (
          <ToggleGroupItem
            key={index}
            value={genre.id.toString()}
            className="h-[20px] px-0 pl-[10px] pr-[4px] rounded-full text-[12px] font-semibold border-[1px]"
          >
            {genre.name}
            <MdChevronRight />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};
