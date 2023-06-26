"use client";

import { useGetMovieQuery } from "@/store/responseApi";
import { useGetReviewsForMovieQuery } from "@/store/responseApi";
import MovieInfo from "@/components/movieInfo";
import AllCommentsInMovieList from "@/components/comments";
import styles from "@/styles/movielist.module.css";
import Loading from "@/components/Loading";

type Props = { params: { id: string } };

function FilmPage({ params }: Props) {
  const id = params.id;
  const {
    data: movie,
    isLoading: isMovieLoading,
    error: movieError,
  } = useGetMovieQuery(id);
  const {
    data: reviews,
    isLoading: isCommentsLoading,
    error: reviewsError,
  } = useGetReviewsForMovieQuery(id);

  if (isMovieLoading || isCommentsLoading) {
    return (
      <div className={styles.container}>
        {" "}
        <Loading />
      </div>
    );
  }

  if (!movie || movieError) {
    return <div>Error...</div>;
  }

  return (
    <div className="gap">
      <MovieInfo movie={movie} />
      {reviewsError ? (
        <div>Error...</div>
      ) : (
        <AllCommentsInMovieList allComments={reviews} />
      )}
    </div>
  );
}

export default FilmPage;
