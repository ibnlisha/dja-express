import Image from "next/image"
import Modal from "./Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Product = ({name, images}) => {
    const [show, setShow] = useState(false)
    return (
    <>
    {show && <Modal setShow={setShow} images = {images} />}
        <button onClick ={e => setShow(true)} style={{border: 'none', width: '25%',}}>
            <div style={{width: '100%'}}>
                <Image src = {images[0]} 
                alt = {name} width='200' height='250'
                layout="responsive" />
                <h1>{name}</h1>
                <button>Get a quote
                    <FontAwesomeIcon icon = {faQuoteRight} />
                </button>
            </div>
        </button>
    </>
    )
}
export default Product
