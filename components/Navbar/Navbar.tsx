import Link from "next/link";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.containerBtn}>
          <Link className={styles.link} href='/'>
            Home
          </Link>
          <Link className={styles.link} href='/about'>
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar