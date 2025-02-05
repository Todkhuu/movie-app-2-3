"use client";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleGroups } from "./Togglegroup";

export const Popovers = () => {
  const [genres, setGenres] = useState<GenreType[] | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const genreIds = searchParams.get("genreIds");

  useEffect(() => {
    const data = async () => {
      const dataGenres = await getData("/genre/movie/list?language=en");
      setGenres(dataGenres.genres || []);
    };
    data();
  }, []);

  const clickHandler = (genreIds: string[]) => {
    router.push(`/genre?page=1&genreIds=${genreIds}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <IoIosArrowDown /> Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[577px] h-auto p-[20px]">
        <ToggleGroups set={true} />
      </PopoverContent>
    </Popover>
  );
};
