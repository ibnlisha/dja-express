import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Contact.module.css'
import styles1 from '../styles/Home.module.css'
const ContanctUs = () => {
  return (
    <div className={styles1.container}>
        <h1 className={styles1.title}>Contact Us </h1>
        <div className={styles.contactContainer}>
            <div className={styles.section}>
                <h3>Contact</h3>
                <address>
                    <FontAwesomeIcon icon={faLocationDot}/> Güllük Mahallesi, <br /> 
                    Kırımlılar sokak, <br />
                    No: 13 <br />
                    <FontAwesomeIcon icon = {faPhone} />
                        <a href='tel:+90 539 253 48 78'> +90 539 253 48 78</a> <br/>
                        <FontAwesomeIcon icon = {faEnvelope} />
                        <a href = 'mailTo:expressdaj@gmail.com'> expressdaj@gmail.com</a>
                </address>
            </div>
        <form className={styles.section}>
                <h3>Leave us a comment</h3>
                <div className={styles.names}>
                    <div className={styles.creds}>
                        <label htmlFor='FullNm' >Full Name</label>
                        <input name = 'fullName'  className={styles.formControl}id = 'FullNm' placeholder='Enter your name' />
                    </div>
                    <div className={styles.creds}>
                        <label htmlFor='mailId' >Email</label>
                        <input name = 'email'  className={styles.formControl}id = 'mailId' placeholder='example@gmail.com' />
                    </div>
                </div>
                <label htmlFor='header' >Subject</label>
                <input name = 'subject'  className={styles.formControl}id = 'header' placeholder='Enter your subject' />
                <label htmlFor='comment' >Comment</label>
                <textarea name = 'comment'
                id = 'comment' className={styles.formControl}
                rows= '3'
                placeholder='Type here...'></textarea>
                <button>Submit</button>
            </form>
            <div className={styles.section}>
                <h3>Stay connected:</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href='https://web.whatsapp.com/'>
                        <FontAwesomeIcon icon = {faWhatsapp} /> WhatsApp</a></li>
                    <li className={styles.listItem}><a href='https://www.instagram.com/'>
                    <FontAwesomeIcon icon = {faInstagram} /> Instagram
                    </a></li>
                    <li className={styles.listItem}><a href='https://twitter.com/?lang=en'>
                        <FontAwesomeIcon icon = {faTwitter} /> Twitter </a></li>
                    <li className={styles.listItem}><a href='https://www.facebook.com/'>
                        <FontAwesomeIcon icon = {faFacebook} /> Facebook</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContanctUs