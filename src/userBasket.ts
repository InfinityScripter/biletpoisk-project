// Импортируем необходимые модули и хуки.
import { useState } from "react"; // useState это хук, который используется для создания состояния в функциональных компонентах React.
import { useAppDispatch, useAppSelector } from "@/store/store"; // Специализированные хуки из вашего хранилища Redux, которые позволяют отправлять действия и выбирать данные из хранилища.
import { selectTicketAmount } from "@/store/ReduxBasketSelectors"; // Селектор, позволяющий извлечь количество билетов из хранилища.
import { cartActions } from "@/store/ReduxBasket"; // Импортируем действия корзины.

// Определяем функцию openBasket, которая принимает movieId как параметр.
const openBasket = (movieId: string) => {
  // Определяем локальное состояние с использованием хука useState.
  // confirmationOpen является состоянием, которое определяет, открыто ли модальное окно подтверждения.
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  // Получаем ссылку на функцию dispatch для отправки действий в хранилище.
  const dispatch = useAppDispatch();

  // Используем селектор для извлечения количества билетов на данный фильм из хранилища.
  const count = useAppSelector(
    (state) => selectTicketAmount(state, movieId) || 0
  );

  // Функции для открытия и закрытия модального окна подтверждения.
  const showConfirmationModal = () => setConfirmationOpen(true);
  const closeConfirmationModal = () => setConfirmationOpen(false);

  // Функция для добавления билета в корзину.
  const increment = () => dispatch(cartActions.addTicket(movieId));

  // Функция для удаления билета из корзины. Если в корзине остался последний билет, то открывается модальное окно подтверждения.
  const decrement = () => {
    if (count === 1) {
      setConfirmationOpen(true);
    } else {
      dispatch(cartActions.removeTicket(movieId));
    }
  };

  // Функция для полного удаления билетов из корзины на данный фильм.
  const deleteTicket = () => {
    dispatch(cartActions.deleteTicket(movieId));
    closeConfirmationModal();
  };

  // Возвращаем все эти методы и значения, чтобы они могли быть использованы вне этой функции.
  return {
    count,
    increment,
    decrement,
    deleteTicket,
    isConfirmOpen: confirmationOpen,
    showModal: showConfirmationModal,
    closeModal: closeConfirmationModal,
  };
};

// Экспортируем функцию openBasket как модуль по умолчанию.
export default openBasket;
