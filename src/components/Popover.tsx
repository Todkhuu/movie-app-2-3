"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ToggleGroups } from "./Togglegroup";

export const Popovers = () => {
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
