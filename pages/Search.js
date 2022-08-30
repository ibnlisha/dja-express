import { useRouter } from 'next/router'
import React from 'react'
import Product from '../components/Product'
import { pdts } from '../public/SampleProducts'
import styles from '../styles/Home.module.css'
const Search = () => {
    const router = useRouter()
    const searchQuery = router.query.q
    // const escapeRegex = (text) =>
    //     text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") || 'No query string'
    // const regex = searchQuery? 
    // new RegExp(escapeRegex(searchQuery), 'gi')
    // : 'No search query'
    // const found = pdts.filter(({name})=> regex.test(name))
    // const found = 'coffe macker'.match(regex)
    // console.log('found items', found)
    const found = searchQuery ? pdts.filter(({name})=> name.toLowerCase()
    .includes(searchQuery.toLowerCase())) : []
  return (
    <div className={styles.container}>
      {
        !!found.length ? <div>
          {found.map(product => <Product key = {product.id} {...product} />)}
        </div>
        : 'No products were found'
      }
    </div>
  )
}

export default Search