import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faHandHolding, faBars, faXmark, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css'
import React ,{ useState } from 'react';
import Head from 'next/head'
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
const Navbar = () => {
  const [showNavs, setShowNavs] = useState(true)
  return (
    <div className={styles.navbar}>
      <Head>
        <title>Dja Express</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo1.png" />
        <style>{dom.css()}</style>
      </Head>
      <div className={styles.navContainer}>
        <div className={styles.menuContainer}>
          <h1 style={{margin: '0'}}><Link href='/'><img src='/logo1.png' width='120' /></Link></h1>
              <button className={styles.menu} 
              onClick ={() => setShowNavs(!showNavs)}>
                {showNavs ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}
              </button>
            </div>
          <nav className={showNavs ? styles.showNav : styles.hideNav}>
              <li 
              onClick={e => setShowNavs(!showNavs)}
              className={styles.navItem}><Link href="/">
              <span ><FontAwesomeIcon icon ={faHome} /> Home</span>
                  </Link></li>
              <li 
              onClick={e => setShowNavs(!showNavs)}
              className={styles.navItem}><Link href="/about">
                  <span><FontAwesomeIcon icon = {faUser} /> About us</span>
                  </Link></li>
              <li 
              onClick={e => setShowNavs(!showNavs)}
              className={styles.navItem}><Link href="/services">
              <span ><FontAwesomeIcon icon ={faHandHolding} /> Services</span>
                  </Link></li>
              {/* <li 
              onClick={e => setShowNavs(!showNavs)}
              className={styles.navItem}><Link href="/contact">
                  <span><FontAwesomeIcon icon ={faPhone} /> Contact us</span>
                  </Link></li> */}
          </nav>
    </div>
    </div>
  )
}

export default Navbar