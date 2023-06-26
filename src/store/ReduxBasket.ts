// Импорт функции createSlice из библиотеки Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Типизация состояния корзины. Каждый ключ - это идентификатор фильма, значение - количество билетов.
export type BasketState = {
  [key: string]: number;
};

// Инициализация начального состояния корзины.
const initialState: BasketState = {};

// Создание сегмента состояния (slice) для корзины.
const cartSlice = createSlice({
  name: "cart", // Имя сегмента.
  initialState, // Начальное состояние.
  reducers: {
    // Набор функций-редьюсеров, которые управляют состоянием корзины.

    // Функция для добавления билета на фильм.
    addTicket: (state, { payload }) => {
      const amount = state[payload] || 0; // Если билеты на фильм уже есть в корзине, получим их количество. Если нет, вернется 0.
      state[payload] = amount + 1; // Увеличиваем количество билетов на 1.
    },

    // Функция для удаления билета на фильм.
    removeTicket: (state, { payload }) => {
      const amount = state[payload]; // Получаем текущее количество билетов на фильм.
      if (!amount) {
        return; // Если билетов на фильм нет, ничего не делаем.
      }

      if (amount === 1) {
        delete state[payload]; // Если билет на фильм остался последний, удаляем его.
        return;
      }

      state[payload] = amount - 1; // В противном случае уменьшаем количество билетов на 1.
    },

    // Функция для полного удаления всех билетов на определенный фильм.
    deleteTicket: (state, { payload }) => {
      delete state[payload]; // Удаляем все билеты на фильм.
    },
  },
});

// Экспорт редьюсера корзины и всех связанных действий.
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
