import Image from "next/image";
import classNames from "classnames";
import openBasket from "@/userBasket";
import { Modal } from "@/components/modal";
import styles from "../styles/movieInfo.module.css";
import { GENRES } from "@/apiMap";
import { Counter } from "@/components/counter";

type Props = {
  movie: MovieType;
};

export default function MovieInfo({ movie }: Props) {
  const {
    count,
    increment,
    decrement,
    deleteTicket,
    isConfirmOpen,
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
      <section className={classNames("back", styles.card)}>
        <Image
          src={movie.posterUrl}
          alt=""
          width={300}
          height={375}
          className={styles.poster}
        />
        <div className={styles.info}>
          <header className={styles.header}>
            <h1>{movie.title}</h1>
            <Counter
              count={count}
              increment={() => increment()}
              decrement={() => decrement()}
            />
          </header>
          <dl className="space">
            <div className="flex">
              <dt>
                <h4>Жанр:</h4>
              </dt>
              <dd className={styles.feature}>{GENRES[movie.genre]}</dd>
            </div>
            <div className="flex">
              <dt>
                <h4>Год выпуска:</h4>
              </dt>
              <dd className={styles.feature}>{movie.releaseYear}</dd>
            </div>
            <div className="flex">
              <dt>
                <h4>Рейтинг:</h4>
              </dt>
              <dd className={styles.feature}>{movie.rating}</dd>
            </div>
            <div className="flex">
              <dt>
                <h4>Режиссер:</h4>
              </dt>
              <dd className={styles.feature}>{movie.director}</dd>
            </div>
          </dl>
          <div className={classNames(styles.description, "space")}>
            <h4>Описание</h4>
            <p>{movie.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
