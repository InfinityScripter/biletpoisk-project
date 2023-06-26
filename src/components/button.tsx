import classNames from "classnames";
import styles from "../styles/button.module.css";
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "outlined";
  className?: string;
};

export function Button({ children, variant, onClick, className }: ButtonProps) {
  const buttonClass = classNames(styles.button, styles[variant], className);

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
