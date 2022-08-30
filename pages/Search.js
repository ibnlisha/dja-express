import { useRouter } from 'next/router'
import React from 'react'
import { pdts } from '../public/SampleProducts'
const Search = () => {
    const router = useRouter()
    const searchQuery = router.query.q
    const escapeRegex = (text) =>
        text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") || 'No query string'
    const regex = searchQuery? 
    new RegExp(escapeRegex(searchQuery), 'gi')
    : 'No search query'
    // const found = pdts.filter(({name})=> regex.test(name))
    // const found = 'coffe macker'.match(regex)
    // console.log('found items', found)
  return (
    <div>{searchQuery}</div>
  )
}

export default Search