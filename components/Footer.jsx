import Link from 'next/link'

const Footer = () => {
  return (
    <footer style={{textAlign:'center', marginTop: '1em'}}>
      <hr />
        <div>
            <Link href='/'>Home</Link> <span> | </span>
            <Link href='/about'>About us</Link>
        </div>
        
        <p>Copyright &copy;2022: All rights reserved</p>
      </footer>
  )
}

export default Footer