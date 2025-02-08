"use client";
import { Suspense } from "react";
import { SearchLeft } from "./_components/SearchLeft";
import { ToggleGroups } from "@/components/Togglegroup";

const SearchPage = () => {
  return (
    <Suspense>
      <div className="max-w-[1280px] m-auto mt-[52px]">
        <h2 className="text-[30px] font-semibold">Search results</h2>
        <div className="flex mt-[32px]">
          <SearchLeft />
          <div className="max-w-[403px]">
            <ToggleGroups set={false} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default SearchPage;
