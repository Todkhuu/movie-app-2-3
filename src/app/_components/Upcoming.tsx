import { Button } from "@/components/ui/button";
import { getData } from "@/utils/data";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export const Upcoming = async () => {
  const similarMovies = await getData(`/movie/upcoming?language=en-US&page=1`);
  return (
    <div>
      <Link
        href={`/category/upcoming`}
        className="flex justify-between items-center my-[36px]"
      >
        <h2 className="text-[24px] font-semibold">More like this</h2>
        <Button className="text-[14px]" variant="link">
          See more <GoArrowRight />
        </Button>
      </Link>
    </div>
  );
};
