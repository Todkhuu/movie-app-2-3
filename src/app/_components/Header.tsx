import { ModeToggle } from "@/components/LightDark";
import { Popovers } from "@/components/Popover";
import { PopoverInput } from "@/components/PopoverInput";
import MovieLogo from "@/icons/MovieLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-[100vw] h-[59px] flex items-center">
      <div className="w-[1280px] h-[36px] m-auto flex justify-between">
        <Link href="/" className="flex gap-2">
          <MovieLogo />
          <h2 className="text-[16px] font-bold text-[#4338ca] italic">
            Movie Z
          </h2>
        </Link>
        <div className="flex gap-[12px]">
          <Popovers />
          <PopoverInput />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
