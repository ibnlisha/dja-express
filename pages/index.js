import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { images } from '../public/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import Products from '../components/Products';
import {useRouter} from 'next/router'
export default function Home() { 
  const [currentIdx, setCurrentIdx] = useState(0)
  const [searchString, setSearchString] = useState('')
  const router = useRouter()
  const nextSlide = () => {
    setCurrentIdx((currentIdx+1)%images.length)
  }
  const prevSlide = () =>{
    const idx = currentIdx === 0 ? images.length - 1 : --currentIdx;
    setCurrentIdx(idx)
  }
  let slideShow;
  useEffect(()=>{
    slideShow = setInterval(()=>{
      nextSlide()
    }, 5000)
    return () => clearInterval(slideShow)
  },[nextSlide, slideShow])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={e => {
          e.preventDefault();
          if(searchString){
            router.push({
              pathname: '/Search',
              query: {q: searchString}
            })
          }
        }} >
          <input type="search" 
          onChange = {e => setSearchString((e.target.value))}
          style={{
          width: "60%",
          fontSize: '1.2em',
          padding: '0.1em 0.3em', margin: '0 auto'
        }}
          name = "searcString" placeholder="Search..."/>
          <button 
          style={{fontSize: '1.2em',}}
          ><FontAwesomeIcon icon={faSearch}/>Search</button>
        </form>
        <div style={{
          backgroundImage: `url(${images[currentIdx]})`,
         }} className={`${styles.imgContainer} ${styles.show}`}>
          <button 
          style={{fontSize: '3em', display: 'none'}}
          onClick = {prevSlide}
          ><FontAwesomeIcon icon={faAngleLeft} /></button>
          <div className={styles.wellcomeMessage}>
            <h1>Welcome to Dja express</h1>
            <h3>Affordable High Quality Goods and
               Services Should be our Right</h3>
          </div>
          <button 
          style={{fontSize: '3em', display: 'none'}}
          onClick = {nextSlide}
          ><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <nav style={{listStyleType: "none"}} 
        className={styles.grid}>
          <li className={styles.card}>Feauted Products</li>
          <li className={styles.card}>Trending now</li>
          <li className={styles.card}>Popular categories</li>
          <li className={styles.card}>Sales</li>
          <li className={styles.card}>Top rated</li>
        </nav>
        <section>
          <h1>Most Searched Goods</h1>
          <Products />
        </section>
      </main>
    </div>
  )
}
