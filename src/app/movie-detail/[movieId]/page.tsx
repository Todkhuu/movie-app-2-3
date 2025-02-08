import { getData } from "@/utils/data";
import { MovieTop } from "./_components/MovieTop";
import { MovieTrailer } from "./_components/MovieTrailer";
import { MovieGenres } from "./_components/MovieGenres";
import { MovieCrews } from "./_components/MovieCrews";
import { MovieCards } from "./_components/MovieCards";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;

  const movie = await getData(`/movie/${movieId}?language=en-US`);

  return (
    <div className="max-w-[1080px] m-auto mt-[52px]">
      <MovieTop movie={movie} />
      <MovieTrailer movie={movie} id={movieId} />
      <MovieGenres movie={movie} />
      <p className="mt-[20px]">{movie.overview}</p>
      <MovieCrews id={movieId} />
      <MovieCards id={movieId} />
    </div>
  );
};
export default MoviePage;
