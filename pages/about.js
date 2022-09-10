import styles from '../styles/Home.module.css'
import AboutStyles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <div className={AboutStyles.widgets}>
          <div className={AboutStyles.widget}>
            <h1>Our Mission</h1>
            <p className='mission-statement'>
              Our mission is to help foreign Investors, businessmen, 
              and individuals willing to invest in or purchase locally 
              produced goods and services from Turkey.</p>
            </div>
          <div className={AboutStyles.widget}>
            <h1>Our Vision</h1>
            <q className='vision'> To expose the world to the high quality and affordable 
            Turkish goods and services.</q>
          </div>
          <div className={AboutStyles.widget}>
            <h1>Biref history</h1>
            <p className='history'>
            Dja Express with it&apos;s commitment to customer
             satisfaction and a customer-centric culture has
              been serving customers from all the four corners of 
              the globe since 2013.  We come a long way from serving our
               clients in buying goods to getting health, 
               medical and tourism services. We, with our dynamic 
               multi-cultural team from different cultural back-grounds,
                 bring together our global experiences to unravel
                  the opportunities embedded in the Turkish
                   market and make it available to the world.
              </p>
          </div>
        </div>
    </div>
  )
}

export default About