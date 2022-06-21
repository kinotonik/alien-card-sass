import React from 'react'
import './Card.scss'
import alien from '../assets/alien-700x336.png'
import alien2 from '../assets/alien2.png'
function Card() {
  return (
    <div className='card-container'>
        <div className='img-card-section'>
            <div className="img-card-square"></div>
            <img className="img-card-style" src={alien} alt="background" />
        </div>

        <div className='name-card-section'>
           <h3>Alien</h3> 
        </div>

        <div className='title-card-section'>
            Xénomorphe
        </div>

        <div className='desc-card-section'>
        Les Aliens ne sont pas des créatures à la technologie avancée, mais des bêtes féroces, animées par l'instinct et armées uniquement de griffes, de crocs et d'une queue aiguisée. Leur seul but est de proliférer au détriment d'autres espèces. C'est une personnification de la xénophobie.
        </div>
        <a href="https://fr.wikipedia.org/wiki/Alien_(cr%C3%A9ature)" target="_blank" rel="noopener noreferrer">
            <img className='profile-img-card' alt="" src={alien2}></img>
        </a>
    </div>
    
  )
}

export default Card