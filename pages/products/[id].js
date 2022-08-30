import React from 'react'
import {pdts} from '../../public/SampleProducts'
import Carousel from '../../utils/Carousel'
const ProductDetails = ({pdt}) => 
    <div>
        <h1>{pdt.name}</h1>
        <Carousel images = {pdt.images} />
        <hr/>
        <h1>Similar Products</h1>
    </div>
 

export const getStaticProps = context => {
    const product = pdts.find(({id}) => id == context.params.id) || {}
    const pdt = JSON.parse(JSON.stringify(product))
    return {
        props: {
            pdt,
        },
        revalidate: 1,
    }
}
export const getStaticPaths = () => ({
    paths: pdts.map(({id}) => ({
        params: {id}
    })),
    fallback: false,
})
export default ProductDetails