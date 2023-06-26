import Link from "next/link";

import { IconForBasket } from "@/components/iconForBasket";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.sticky}>
      <nav className="container">
        <Link href="/">
          <h1>Билетопоиск</h1>
        </Link>
        <IconForBasket />
      </nav>
    </header>
  );
}
