import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faHandHolding, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css'
import React ,{ useState } from 'react';
const Navbar = () => {
  const [showNavs, setShowNavs] = useState(true)
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.menuContainer}>
          <h1><Link href='/'>Dja Express</Link></h1>
              <button className={styles.menu} 
              onClick ={() => setShowNavs(!showNavs)}>
                {showNavs ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}
              </button>
            </div>
          <nav className={showNavs ? styles.showNav : styles.hideNav}>
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