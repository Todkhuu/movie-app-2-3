"use client";
import { Suspense } from "react";
import { ToggleGroups } from "@/components/Togglegroup";
import GenreRight from "./_components/GenreRight";

export default function GenrePage() {
  return (
    <Suspense>
      <div className="max-w-[1280px] m-auto mt-[52px]">
        <h2 className="text-[30px] font-semibold">Search filter</h2>
        <div className="flex mt-[32px]">
          <ToggleGroups set={true} />
          <GenreRight />
        </div>
      </div>
    </Suspense>
  );
}
