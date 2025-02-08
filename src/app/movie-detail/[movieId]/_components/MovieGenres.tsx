import { Button } from "@/components/ui/button";
import { OneMovie, OneMovieGenre } from "@/utils/types";

export const MovieGenres = ({ movie }: { movie: OneMovie }) => {
  return (
    <div>
      {movie.genres.map((movie: OneMovieGenre, index: number) => (
        <Button
          key={index}
          className="text-[12px] font-semibold h-[18px] px-[10px] bg-transparent border-[1px] focus:text-secondary text-secondary-foreground rounded-full mr-[12px] mt-[32px]"
        >
          {movie.name}
        </Button>
      ))}
    </div>
  );
};
