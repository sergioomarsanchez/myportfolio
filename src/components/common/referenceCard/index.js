import React, { useContext,} from 'react'
import { ThemeContext } from '../../../contexts/theme'
import './referenceCard.css'


function ReferenceCard({ reference, setCardsState }) {
   function handleClose(){
       setCardsState({
        'card1':false,
        'card2':false,
        'card3':false,
        'card4':false,
        'card5':false,
       })
   }
   const [isDark] = useContext(ThemeContext);
  return (
    <div className='referenceCardContainer'>
        <section className={isDark ? "referenceCardWrapper" : "referenceCardWrapperLight"}>
        <button onClick={()=>handleClose()} className='x'>X</button>
        <header>
        <p className='refText'>{reference.referenceText}</p>
        </header>
        <footer className='foot'>
        <img src={reference.image} loading='lazy' alt={'profile of '+ reference.name} className='profileImg'/>
        <section className='coworkerInfo'>
            <span>{reference.name}</span>
            <span>And I worked with Sergio as his {reference.workRelation}</span>
            <span>{reference.title}</span>
            <span><a href={reference.linkedinProfile} _blank >LinkedIn Profile</a></span>
        </section>
        </footer>
        </section>
    </div>
  )
}

export default ReferenceCard