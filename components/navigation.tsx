import Link from "next/link";
import styles from "./styles/navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.listItem}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/">MOVIES</Link>
        </li>
        <li>
          <Link href="/">TRAILERS</Link>
        </li>
      </ul>
      <div className={styles.srcMypage}>
        <div>검색</div>
        <div>
          <Link href="/">MY PAGE</Link>
        </div>
      </div>
    </nav>
  );
}
