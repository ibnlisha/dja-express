import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { images } from '../public/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Products from '../components/Products';
import {useRouter} from 'next/router'
config.autoAddCss = false;
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
      <Head>
        <title>Dja Express</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to your favorite export service
        </h1> */}
        <form onSubmit={e => {
          e.preventDefault();
          router.push({
            pathname: '/Search',
            query: {q: searchString}
          })
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
          <button 
          style={{fontSize: '3em', display: 'none'}}
          onClick = {nextSlide}
          ><FontAwesomeIcon icon={faAngleRight} /></button>
          {/* <Image src={image} alt='Random image' layout='responsive' width='400' height='300'/> */}
          {/* <img  src={image} alt = 'random pic' style={{width: '100%'}}/> */}
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