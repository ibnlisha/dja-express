import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from "../utils/Carousel"
import styles from '../styles/Modal.module.css'

const Modal = ({setShow, images}) => 
    <div className={styles.modal}>
        <div className={styles.innerModal}>
            <button 
            className={styles.close}
            onClick ={e => setShow(false)}>
                <FontAwesomeIcon icon = {faXmark} size='3x'/>
            </button>
            <Carousel images ={images} size={70}/>
        </div>
    </div>

export default Modal