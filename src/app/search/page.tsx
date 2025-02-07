"use client";
import { Suspense } from "react";
import Searchs from "./_components/Search";

const SearchPage = () => {
  return (
    <Suspense>
      <Searchs />
    </Suspense>
  );
};
export default SearchPage;
