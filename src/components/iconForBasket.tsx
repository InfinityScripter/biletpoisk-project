"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/basketIcon.module.css";
import { useAppSelector } from "@/store/store";
import { selectTotalTickets } from "@/store/ReduxBasketSelectors";

export function IconForBasket() {
  const count = useAppSelector((state) => selectTotalTickets(state));
  return (
    <Link href="/basket">
      <div className={styles.container}>
        {count !== 0 && <div className={styles.counter}>{count}</div>}
        <Image src="/icons/cart.svg" alt="" width={28} height={28} />
      </div>
    </Link>
  );
}
