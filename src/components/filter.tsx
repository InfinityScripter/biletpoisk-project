"use client";

import classNames from "classnames";
import { GENRES } from "@/apiMap";

import styles from "../styles/filter.module.css";
import { useGetCinemasQuery } from "@/store/responseApi";
import { Input } from "@/components/input";
import { SearchActionKind } from "@/app/page";
import { Select } from "@/components/select";

type FilterPropsType = {
  search: SearchType;
  dispatch: React.Dispatch<SearchActionType>;
};

export function Filter({ search, dispatch }: FilterPropsType) {
  const { data: cinemas, isLoading, error } = useGetCinemasQuery();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <aside className={classNames(styles.container, "back")}>
      <div className={classNames(styles.filters, "space")}>
        <h4>Фильтр поиска</h4>
        <Input
          value={search.title}
          label="Название"
          placeholder="Введите название"
          onChange={(event) => {
            dispatch({
              type: SearchActionKind.SearchName,
              payload: event.currentTarget.value,
            });
          }}
        />
        <Select
          label="Жанр"
          placeholder="Выберите жанр"
          value={search.genre ? GENRES[search.genre] : ""}
          setValue={(value) =>
            dispatch({
              type: SearchActionKind.SearchGenre,
              payload: value,
            })
          }
        >
          {Object.entries(GENRES).map((genre) => {
            return (
              <Select.Option
                key={genre[0]}
                id={genre[0]}
                displayName={genre[1]}
              />
            );
          })}
        </Select>
        <Select
          label="Кинотеатр"
          placeholder="Выберите кинотеатр"
          value={
            search.cinema && !!cinemas
              ? cinemas.filter(
                  (cinema: CinemaType) => cinema.id === search.cinema
                )[0].name
              : ""
          }
          setValue={(value) =>
            dispatch({
              type: SearchActionKind.SearchCinema,
              payload: value,
            })
          }
        >
          {isLoading ? (
            <Select.Option id="" displayName="Кинотеатры загружаются..." />
          ) : (
            <>
              <Select.Option id="" displayName="Любой" />
              {cinemas?.map((cinema: CinemaType) => {
                return (
                  <Select.Option
                    key={cinema.id}
                    id={cinema.id}
                    displayName={cinema.name}
                  />
                );
              })}
            </>
          )}
        </Select>
      </div>
    </aside>
  );
}
