import { Paginations } from "@/components/Pagination";
import { getData } from "@/utils/data";
import { ResultsType, Search } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchCards } from "./SearchCards";

export const SearchLeft = () => {
  const [searchMovies, setSearchMovies] = useState<Search | null>(null);
  const [filtered, setFiltered] = useState<ResultsType[] | undefined>();
  const searchParams = useSearchParams();

  const value = searchParams.get("value") || "";
  const page = (searchParams.get("page") || 1).toString();
  const genreIds = searchParams.get("genreIds") || "";

  useEffect(() => {
    const getSearchData = async () => {
      const searchData = await getData(
        `/search/movie?query=${value}&language=en-US&page=${page}`
      );
      setSearchMovies(searchData || []);
    };
    getSearchData();
  }, [value, page]);

  useEffect(() => {
    const filter = genreIds
      ? searchMovies?.results.filter((movie: ResultsType) =>
          movie.genre_ids.some((id) => genreIds?.includes(id.toString()))
        )
      : searchMovies?.results;
    setFiltered(filter);
  }, [searchMovies?.results, genreIds]);

  return (
    <div className="w-full border-r-[1px] mr-[28px]">
      <p className="text-[20px] font-semibold">
        {searchMovies?.total_results} results for {value}
      </p>
      <SearchCards filtered={filtered} />
      <Paginations page={page} />
    </div>
  );
};
