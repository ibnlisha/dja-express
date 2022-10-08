import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Contact.module.css'
import styles1 from '../styles/Home.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContanctUs = () => {
    const [msg, setMsg] = useState({
        fullName: '',
        email: '',
        subject: '',
        comment: '',
    })
    const [response, setResponse] = useState()
    const handleChange = e => {
        const temp = msg
        temp[e.target.name] = e.target.value;
        setMsg(temp)
    }
    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            await emailjs.send('service_pqbipd7', 'template_eoqvobu', msg, 'yGieGRj7Y9NQwk6oY')
            setResponse('Your message has been sent successfully. Our customer servie will get back to you within 24 hours.')
            e.target.reset()
        } catch (error) {
            setResponse('Oops! Something went wrong. Please try again')
        }
    }
  return (
    <div className={styles1.container}>
        {/* <h1 className={styles1.title}>Contact Us </h1> */}
        <div className={styles.contactContainer}>
            <div className={styles.section}>
                <h3>Contact</h3>
                <address>
                    <FontAwesomeIcon icon={faLocationDot}/> Güllük Mahallesi, <br /> 
                    Kırımlılar sokak, <br />
                    Zip code: 26170 <br />
                    <FontAwesomeIcon icon = {faPhone} />
                        <a href='tel:+90 539 253 48 78'> +90 539 253 48 78</a> <br/>
                        <FontAwesomeIcon icon = {faEnvelope} />
                        <a href = 'mailTo:info@djaexpress.com'> info@djaexpress.com</a>
                </address>
            </div>
            <div className={styles.section}>
                <h3>Stay connected:</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href='https://wa.me/905392534878'>
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
            <form className={styles.section}
        onSubmit ={handleSubmit}>
                <h3>Leave us a message</h3>
                <div className={styles.names}>
                    <div className={styles.creds}>
                        <label htmlFor='FullNm' >Full Name</label>
                        <input name = 'fullName'  className={styles.formControl}
                        onChange = {handleChange}
                        id = 'FullNm' placeholder='Enter your name' />
                    </div>
                    <div className={styles.creds}>
                        <label htmlFor='mailId' >Email</label>
                        <input name = 'email'  className={styles.formControl}
                        onChange = {handleChange}
                        id = 'mailId' placeholder='example@gmail.com' />
                    </div>
                </div>
                <label htmlFor='header' >Subject</label>
                <input name = 'subject'  className={styles.formControl}
                onChange = {handleChange}
                id = 'header' placeholder='Enter your subject' />
                <label htmlFor='comment' >Comment</label>
                <textarea name = 'comment'
                id = 'comment' className={styles.formControl}
                rows= '3' onChange = {handleChange}
                placeholder='Type here...'></textarea>
                <button>Submit</button>
                <p>{response}</p>
            </form>
        </div>
    </div>
  )
}

export default ContanctUs