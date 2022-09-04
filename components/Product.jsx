import Image from "next/image"
import Modal from "./Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styles from '../styles/Product.module.css'
import Link from "next/link"

const Product = ({id,name, images}) => {
    const [show, setShow] = useState(false)
    return (
    <>
    {show && <Modal setShow={setShow} images = {images} />}
        <button onClick ={e => setShow(true)} className={styles.frame}>
            <div style={{width: '100%'}}>
                <Image src = {images[0]} 
                alt = {name} width='200' height='250'
                layout="responsive" />
                <h1>{name}</h1>
                <Link href={`products/${id}`}>
                    <button>Get a quote
                        <FontAwesomeIcon icon = {faQuoteRight} />
                    </button>
                </Link>
            </div>
        </button>
    </>
    )
}
export default Product
