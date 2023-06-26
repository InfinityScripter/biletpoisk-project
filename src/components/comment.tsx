import classNames from "classnames";

import Image from "next/image";

import styles from "../styles/comment.module.css";

type CommentProps = {
  comment: CommentsType;
};

export default function Comment({ comment }: CommentProps) {
  return (
    <article className={classNames("back", styles.container)}>
      <div className={styles.picture}>
        <Image src="/icons/photo.svg" width={32} height={32} alt="" />
      </div>
      <div className={classNames(styles.content)}>
        <header className={styles.header}>
          <h4>{comment.name}</h4>
          <p className={styles.rating}>
            Оценка: <strong>{comment.rating}</strong>
          </p>
        </header>
        <div>{comment.text}</div>
      </div>
    </article>
  );
}
