export const URL = "http://localhost:3001/api/";

export const ROUTES = {
  cinemas: "cinemas",
  movies: "movies",
  moviesByCinemaId: "movies?cinemaId=",
  movieById: "movie?movieId=",
  reviews: "reviews",
  reviewsByMovieId: "reviews?movieId=",
};

export const GENRES: { [key: string]: string } = {
  "": "Не выбран",
  comedy: "Комедия",
  fantasy: "Фэнтези",
  action: "Боевик",
  horror: "Ужасы",
};
