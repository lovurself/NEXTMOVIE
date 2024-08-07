import Link from "next/link";
import Navigation from "./navigation";
import styles from "./styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        NEXTMOVIE
      </Link>
      <Navigation />
    </header>
  );
}
