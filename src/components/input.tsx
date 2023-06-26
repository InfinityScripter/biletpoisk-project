import classNames from "classnames";
import styles from "../styles/input.module.css";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export function Input(props: InputProps) {
  const { label, ...restProps } = props;
  return (
    <div className={classNames(styles.container)}>
      <label className={styles.label}>{label}</label>
      <input className={classNames(styles.input)} {...restProps} />
    </div>
  );
}
