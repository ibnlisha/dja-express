import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import {v4 as uuid} from 'uuid'
import styles from '../styles/Home.module.css'

const Carousel = ({auto, images, size}) => {
const [currentIdx, setCurrentIdx] = useState(0)
  const nextSlide = () => {
    setCurrentIdx((currentIdx+1)%images.length)
  }
  const prevSlide = () =>{
    const idx = currentIdx === 0 ? images.length - 1 : --currentIdx;
    setCurrentIdx(idx)
  }
  let slideShow;
  useEffect(()=>{
    if(auto){
        slideShow = setInterval(()=>{
            nextSlide()
          }, 5000)
          return () => clearInterval(slideShow)
    }
  },[nextSlide, slideShow])
  return (
    <>
    <div 
    className={`${styles.grid} ${styles.show}`}
    style={{
        // backgroundImage: `url(${images[currentIdx]})`,
        width: '100%',
        height: `${size}vh`,
       }} 
        >
        <img src={images[currentIdx]} alt = '' style ={{
            height: '100%'
        }}/>
        <div style={{
            position: 'absolute',
            width: '85%',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <button 
            style={{fontSize: '3em', display: 'none'}}
            onClick = {prevSlide}
            ><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button 
            style={{fontSize: '3em', display: 'none'}}
            onClick = {nextSlide}
            ><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </div>
      <nav className={styles.grid} 
      style={{listStyleType: 'none'}}>
        {images.map((image, idx)=>(
            <li key = {uuid()} style={{marginLeft: '0.2em'}}>
                <button 
                onClick = {e => setCurrentIdx(idx)}
                style = {{
                    border: idx !== currentIdx? '' : '0.3em solid steelblue'
                }}
                >
                    <Image src = {image} width = '100' height = '125' alt = ''/>
                </button>
            </li>
        ))}
      </nav>
    </>
  )
}

export default Carousel