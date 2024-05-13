import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={`${styles.navContainer} container`}>
      <img src="/logo.png" alt="logo" />
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Dashboard</li>
        <li className={styles.active}>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
}
