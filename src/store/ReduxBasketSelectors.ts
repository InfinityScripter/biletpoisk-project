import { RootState } from "@/store/store";
import { BasketState } from "./ReduxBasket";

export const selectCart = (state: RootState): BasketState => state.cart;

export const selectTicketAmount = (state: RootState, id: string): number =>
  selectCart(state)[id];

export const selectTotalTickets = (state: RootState): number => {
  const cart = selectCart(state);
  return Object.values(cart).reduce((acc, el) => acc + el, 0);
};

export const selectMovieIds = (state: RootState): string[] => {
  const cart = selectCart(state);
  return Object.keys(cart);
};
