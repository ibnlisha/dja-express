import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faMedkit, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import Chat from '../components/Chat'

const Services = () => {
  return (
    <div className={styles.container}>
      <Chat />
        <h1 className={styles.title}>Our Services</h1>
        <h4 style={{textAlign: 'center'}}>The servieces we offer are divided into three main categories which are</h4>
        <div className={styles.grid}>
          <a className={styles.card} href='#expts'>
            <h1><FontAwesomeIcon icon = {faPlaneDeparture}/> Export</h1>
          </a>
          <a className={styles.card} href='#medico'>
            <h1><FontAwesomeIcon icon = {faMedkit}/> Medical tourism</h1>
          </a>
          <a className={styles.card} href='#edumo'>
            <h1><FontAwesomeIcon icon = {faGraduationCap} /> Education</h1>
          </a>
          <div style={{flexBasis: '100%'}}>
            <div id='expts'>
              <h1 >Export</h1>
              <img 
              style={{float: 'left', marginRight: '2em', borderRadius: '1em'}}
              src='https://freerangestock.com/thumbnail/39109/global-logistics-and-freight-concept.jpg'/>
              <p>We specialize in the exportation of Turkish made goods and services to 
                15 countries in Africa, Europe, Asia and The Americas. With our ten years 
                experienced team's collaboration and know-how, we have helped both businesses
                 and individuals to get the best quality of Turkish made goods and services at
                  convenient prices. We specialize mainly in organic fertilizers, Cosmetics,
                   Furniture, suits, seramics, carpets, netwear, fashion apparel, jewelry and many more...</p>
              <p>Imports from Turkey should unquestionably be taken into account when choosing
                 which nations to source goods from. A preferential trade agreement between 
                 Turkey and the EU provides some significant benefits for the EU-Turkey 
                 customs union, making trade in 2022 appear to be getting stronger for Turkey's exports.</p>
            </div>
            <div id='medico'>
              
              <img 
              style={{float: 'right', marginLeft: '2em', borderRadius: '1em'}}
              src='https://media.istockphoto.com/photos/portrait-of-two-doctors-in-masks-picture-id672449872?k=20&m=672449872&s=612x612&w=0&h=3PIVbsJSBQqk13V0iDegbP2IUnHWw4EoGBpljhYwj7I='/>
              <h1  >Medical tourism</h1>
              <p>Turkey is one of the top 17 destinations for tourists seeking medical care nowadays. 
                In 2018, 700,000 tourists traveled to Turkey just to utilize the country's first-rate 
                healthcare offerings. Medical tourists make up 32% of all patients in the nation!
                Turkey is referred to as the eastern and western entrance. No matter what continent or country 
                you are coming from, you can easily reach it. Additionally, it has long been a major political, 
                cultural, and commercial hub of the world.
                One of the biggest airports in the world is Istanbul Airport in Turkey. 
                Once its development is complete, it will be able to handle and house about 200 million 
                passengers annually and offer about 300 direct flights throughout the world.</p>
                <p>We, Dja Express help international patients find the best medical care services
                  (from General check-ups, hair transplant to surgery)  at the most convenient price.</p>
            </div>
            <div id='edumo'>
              <h1 >Education</h1>
              <img 
              style={{float: 'left', marginRight: '2em', borderRadius: '1em'}}
              src='https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVybmF0aW9uYWwlMjBzdHVkZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
              <p>Since the academic year 2015–16, there has been a notable increase in the number 
                of international students choosing to study in Turkey. Currently, Turkey has about 
                650,000 international students, indicating the prominence of the nation as a 
                destination for higher education.</p>
              <p>One reason many choose to study in Turkey is the country's comparatively low 
                cost and high quality of education, as well as the possibility of receiving 
                scholarships that also provide a monthly salary. With a target of 350,000 
                foreign students, the Turkish government is eager to expand its appeal into 
                the student market abroad. All foreign students who want to study in 
                Turkey can get assistance through Dja Express in finding the right program 
                and university for their future career.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services