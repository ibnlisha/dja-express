import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <div className='container'>
    <Navbar />
    <div className='main'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </div>
}

export default MyApp
