import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="/">Home</Link>
          </li>
          <li>
            <Link className={styles.link} href="/about">About</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
