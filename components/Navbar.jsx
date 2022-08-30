import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faHandHolding } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1><Link href='/'>Dja Express</Link></h1>
        <nav className={styles.nav}>
            <li className={styles.navItem}><Link href="/services">
            <span ><FontAwesomeIcon icon ={faHandHolding} />Services</span>
                </Link></li>
            <li className={styles.navItem}><Link href="/about">
                <span><FontAwesomeIcon icon = {faUser} /> About us</span>
                </Link></li>
            <li className={styles.navItem}><Link href="/contact">
                <span><FontAwesomeIcon icon ={faPhone} />Contact us</span>
                </Link></li>
        </nav>
    </div>
    </div>
  )
}

export default Navbar