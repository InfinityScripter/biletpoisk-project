"use client";

import classNames from "classnames";
import { useAppSelector } from "@/store/store";
import styles from "./page.module.css";
import {
  selectMovieIds,
  selectTotalTickets,
} from "@/store/ReduxBasketSelectors";
import { useGetMoviesForCartQuery } from "@/store/responseApi";
import { MovieCard } from "@/components/movie";
import Loading from "@/components/Loading";

function CartTotal() {
  const amount = useAppSelector((state) => selectTotalTickets(state));
  return (
    <footer className={classNames(styles.total, "back")}>
      <h3>Итого билетов:</h3>
      <h3>{amount}</h3>
    </footer>
  );
}

export default function Cart() {
  const ids = useAppSelector((state) => selectMovieIds(state));
  const { data, isLoading, error } = useGetMoviesForCartQuery(ids);

  if (isLoading) {
    return (
      <div className={styles.container}>
        {" "}
        <Loading />
      </div>
    );
  }

  if (!data || error) {
    return <div>Empty...</div>;
  }

  return (
    <section className={styles.container}>
      <div className={classNames("space")}>
        {data
          .filter((movie: MovieType) => ids.includes(movie.id))
          .map((movie: MovieType) => {
            return <MovieCard key={movie.id} value="cart" movie={movie} />;
          })}
        <div className={styles.filler}></div>
      </div>
      <CartTotal />
    </section>
  );
}
