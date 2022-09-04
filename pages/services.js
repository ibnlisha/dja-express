import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faMedkit, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import Chat from '../components/Chat'

const Services = () => {
  return (
    <div className={styles.container}>
      <Chat />
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1><FontAwesomeIcon icon = {faPlaneDeparture}/> Export</h1>
          </div>
          <div className={styles.card}>
            <h1><FontAwesomeIcon icon = {faMedkit}/> Medical tourism</h1>
          </div>
          <div className={styles.card}>
            <h1><FontAwesomeIcon icon = {faGraduationCap} /> Education</h1>
          </div>
        </div>
    </div>
  )
}

export default Services