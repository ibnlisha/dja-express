import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from "../utils/Carousel"


const Modal = ({setShow, images}) => 
    <div style = {{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     }}>
        <div style={{
            position: 'relative',
            width: '60%',
            backgroundColor: 'lightgrey',
            padding: '1em',
        }}>
            <button 
            style={{
                position: 'absolute',
                top: '1em',
                left: 'calc(100% - 4em)'
            }}
            onClick ={e => setShow(false)}>
                <FontAwesomeIcon icon = {faXmark} size='3x'/>
            </button>
            <Carousel images ={images} size={70}/>
        </div>
    </div>

export default Modal