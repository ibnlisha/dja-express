import Product from './Product'
import styles from '../styles/Home.module.css'
import { pdts } from '../public/SampleProducts'

const Products = () => {
  return (
    <div className={styles.grid}>
        {pdts.map(pdt => <Product {...pdt} key={pdt.id}/>)}
    </div>
  )
}

export default Products