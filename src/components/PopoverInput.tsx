import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import SearchIcon from "@/icons/SearchIcon";
import { Input } from "./ui/input";

export const PopoverInput = () => {
  return (
    <Popover>
      <PopoverAnchor className="w-[379px] h-[36px] flex items-center border-[1px] px-[12px] rounded-[8px] border-secondary">
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search.."
          className="ml-[10px] border-none focus-visible:ring-0 shadow-none "
        />
      </PopoverAnchor>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};
