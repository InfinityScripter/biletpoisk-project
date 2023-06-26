import Image from "next/image";

import styles from "../styles/counter.module.css";

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

function CounterButton({ onClick, disabled, children }: ButtonProps) {
  return (
    <button
      className={styles["icon-button"]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type CounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export function Counter({ count, increment, decrement }: CounterProps) {
  return (
    <div className={styles.container}>
      <CounterButton disabled={count === 0} onClick={() => decrement()}>
        <Image src="/icons/minus.svg" alt="" width={10} height={10} />
      </CounterButton>
      <span className={styles.counter}>{count}</span>
      <CounterButton disabled={count === 30} onClick={() => increment()}>
        <Image src="/icons/plus.svg" alt="" width={10} height={10} />
      </CounterButton>
    </div>
  );
}
