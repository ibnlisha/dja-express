import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Contact.module.css'
import styles1 from '../styles/Home.module.css'
const ContanctUs = () => {
  return (
    <div className={styles1.container}>
        <h1 className={styles1.title}>Contact Us Now</h1>
        <div className={styles.contactContainer}>
            <div>
                <h3>You can contact us via:</h3>
                <ul className={styles.list}>
                    <li><a href='https://web.whatsapp.com/'>
                        <FontAwesomeIcon icon = {faWhatsapp} />WhatsApp</a></li>
                    <li><a href='https://www.instagram.com/'>
                    <FontAwesomeIcon icon = {faInstagram} />Instagram
                    </a></li>
                    <li><a href='https://twitter.com/?lang=en'>
                        <FontAwesomeIcon icon = {faTwitter} />Twitter </a></li>
                    <li><a href='https://www.facebook.com/'>
                        <FontAwesomeIcon icon = {faFacebook} />Facebook</a></li>
                    <li>Call our customer service <br/>
                        <FontAwesomeIcon icon = {faPhone} />
                        <a href='tel:+90 5** *** ** **'>+90 5** *** ** **</a>
                    </li>
                    <li>Or send us a mail if you prefer <br/>
                        <FontAwesomeIcon icon = {faEnvelope} />
                        <a href = 'mailTo:info@jaexpress.com'>info@djaexpress.com</a>
                    </li>
                </ul>
            </div>
            <form>
                <h3>Leave us a comment</h3>
                <label htmlFor='FullNm' className={styles.formControl}>Full Name</label>
                <input name = 'fullName'  className={styles.formControl}id = 'FullNm' placeholder='Full name' />
                <label htmlFor='mailId' className={styles.formControl}>Subject</label>
                <input name = 'email'  className={styles.formControl}id = 'mailId' placeholder='example@gmail.com' />
                <label htmlFor='header' className={styles.formControl}>Subject</label>
                <input name = 'subject'  className={styles.formControl}id = 'header' placeholder='Subject' />
                <label htmlFor='comment' className={styles.formControl}>Comment</label>
                <textarea name = 'comment'
                id = 'comment' className={styles.formControl}
                rows= '8'
                placeholder='Type here...'></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContanctUs