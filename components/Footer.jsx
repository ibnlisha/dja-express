import Link from 'next/link'
import ContanctUs from './Contact'
import styles from '../styles/Home.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <hr /> */}
        <div>
            <Link href='/'>Home</Link> <span> | </span>
            <Link href='/about'>About us</Link>
        </div>
        <ContanctUs />
        <p>Copyright &copy;2022: All rights reserved</p>
      </footer>
  )
}

export default Footer