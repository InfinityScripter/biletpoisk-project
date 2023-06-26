// Импорт необходимых модулей из Redux Toolkit и react-redux.
import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

// Импорт различных API и редьюсеров.
import { moviesApi } from "@/store/responseApi";
import { cinemasApi } from "@/store/responseApi";
import { reviewsApi } from "@/store/responseApi";
import { cartReducer } from "@/store/ReduxBasket";

// Настройка и создание Redux хранилища.
export const store = configureStore({
  reducer: {
    // Редьюсеры для различных API и корзины.
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Настройка промежуточного ПО (middleware) с использованием функции getDefaultMiddleware.
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(cinemasApi.middleware)
      .concat(reviewsApi.middleware),
});

// Определение типа состояния хранилища (RootState) и диспетчера (AppDispatch).
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Создание специализированных хуков для использования в компонентах.
// Эти хуки уже привязаны к типам нашего хранилища и диспетчера.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
