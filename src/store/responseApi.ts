import { ROUTES, URL } from "@/apiMap";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// Cinema API
export const cinemasApi = createApi({
  reducerPath: "cinemasApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getCinemas: builder.query<CinemaType[], void>({
      query: () => ROUTES.cinemas,
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;

// Movies API
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getMovie: builder.query<MovieType, string>({
      query: (id) => `${ROUTES.movieById}${id}`,
    }),
    getMoviesForCart: builder.query<MovieType[], string[]>({
      async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
        const response = await Promise.all(
          ids.map((id) => fetchWithBQ(`${ROUTES.movieById}${id}`))
        );
        return response[0].data
          ? { data: response.map((movie) => movie.data) as MovieType[] }
          : { error: response[0].error as FetchBaseQueryError };
      },
    }),
    getMoviesForMainPage: builder.query<MovieType[], string>({
      async queryFn(cinemaId, _queryApi, _extraOptions, fetchWithBQ) {
        if (!cinemaId) {
          const response = await fetchWithBQ(`${ROUTES.movies}`);
          return response.data
            ? { data: response.data as MovieType[] }
            : { error: response.error as FetchBaseQueryError };
        }
        const response = await fetchWithBQ(
          `${ROUTES.moviesByCinemaId}${cinemaId}`
        );
        return response.data
          ? { data: response.data as MovieType[] }
          : { error: response.error as FetchBaseQueryError };
      },
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMoviesForCartQuery,
  useGetMoviesForMainPageQuery,
} = moviesApi;

// Reviews API
export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getReviewsForMovie: builder.query<CommentsType[], string>({
      query: (id) => `${ROUTES.reviewsByMovieId}${id}`,
    }),
  }),
});

export const { useGetReviewsForMovieQuery } = reviewsApi;
