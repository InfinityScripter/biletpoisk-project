import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { GENRES } from "@/apiMap";

import styles from "../styles/movie.module.css";
import { Modal } from "@/components/modal";
import openBasket from "@/userBasket";
import { Counter } from "@/components/counter";

type CardProps = {
  movie: MovieType;
  value: "regular" | "cart";
};

export function MovieCard({ movie, value }: CardProps) {
  const {
    count,
    increment,
    decrement,
    deleteTicket,
    isConfirmOpen,
    showModal,
    closeModal,
  } = openBasket(movie.id);

  return (
    <>
      {isConfirmOpen && (
        <Modal
          onAccept={() => {
            deleteTicket();
          }}
          onDecline={() => closeModal()}
        >
          <Modal.Header>Удаление билета</Modal.Header>
          <Modal.Content>Вы уверены, что хотите удалить билет?</Modal.Content>
          <Modal.Actions acceptText="Да" declineText="Нет" />
        </Modal>
      )}
      <section className={classNames("back", styles.container)}>
        <div className={styles.card}>
          <Image
            className={styles.poster}
            src={movie.posterUrl}
            alt=""
            width={100}
            height={128}
          />
          <div>
            <h3 className={styles.title}>
              <Link href={`film/${movie.id}`}>{movie.title}</Link>
            </h3>
            <i>{GENRES[movie.genre]}</i>
          </div>
          <Counter
            count={count}
            increment={() => increment()}
            decrement={() => decrement()}
          />
        </div>
        {value === "cart" && (
          <Image
            className={styles.close}
            onClick={() => showModal()}
            src="icons/close.svg"
            alt=""
            width={20}
            height={20}
          />
        )}
      </section>
    </>
  );
}
