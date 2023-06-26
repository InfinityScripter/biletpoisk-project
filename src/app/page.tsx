"use client";

import { useReducer } from "react";
import styles from "./page.module.css";
import { Filter } from "@/components/filter";
import { AllMoviesList } from "@/components/allMoviesList";

// инициализация типа для поиска
const initialSearch: SearchType = {
  title: "",
  genre: "",
  cinema: "",
};

// тип для поиска
export enum SearchActionKind {
  SearchName = "SearchName",
  SearchCinema = "SearchCinema",
  SearchGenre = "SearchGenre",
}

// редьюсер для поиска
function searchReducer(
  state: SearchType,
  action: SearchActionType
): SearchType {
  const { type, payload } = action;
  switch (type) {
    // поиск по названию
    case SearchActionKind.SearchName: {
      return { ...state, title: payload };
    }
    // поиск по кинотеатру
    case SearchActionKind.SearchCinema: {
      return { ...state, cinema: payload };
    }
    // поиск по жанру
    case SearchActionKind.SearchGenre: {
      return { ...state, genre: payload };
    }
    default:
      return state;
  }
}

// основной компонент
export default function Main() {
  const [search, dispatch] = useReducer(searchReducer, initialSearch);
  return (
    <div className={styles.container}>
      <Filter search={search} dispatch={dispatch} />
      <AllMoviesList search={search} />
    </div>
  );
}
