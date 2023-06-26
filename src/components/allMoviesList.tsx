"use client";

import classNames from "classnames";

import styles from "../styles/movielist.module.css";
import { useGetMoviesForMainPageQuery } from "@/store/responseApi";
import { MovieCard } from "@/components/movie";
import Loading from "@/components/Loading";

type ListProps = {
  search: SearchType;
};

export function AllMoviesList({ search }: ListProps) {
  const { title, genre, cinema } = search;

  const {
    data: movies,
    isLoading,
    error,
  } = useGetMoviesForMainPageQuery(cinema);

  if (isLoading) {
    return (
      <div className={styles.container}>
        {" "}
        <Loading />
      </div>
    );
  }

  if (!movies || error) {
    return <div>Error...</div>;
  }

  const filteredMovies = movies.filter((movie: MovieType) => {
    return (
      (!genre || movie.genre === genre) &&
      (!title || movie.title.toLowerCase().includes(title.toLowerCase()))
    );
  });

  return (
    <section className={classNames(styles.container, "space")}>
      {filteredMovies.map((movie: MovieType) => {
        return <MovieCard movie={movie} key={movie.id} value="regular" />;
      })}
    </section>
  );
}
