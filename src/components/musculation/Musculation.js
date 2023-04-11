import React from 'react'
import './Musculation.css'
import sld from '../../assets/sld.jpg';

function Musculation() {
  return (
    <div className='cardio'>
    <div className='left-car'>
      <span>espace musculation</span>
      
      <span>Gagner en tonicité, modeler votre silhouette, augmenter votre force, développer votre masse musculaire… Quel que soit votre objectif, karmi Gym met à votre disposition un espace musculation complet.

Des postes dédiés à la musculation vous attendent, machines guidées, postes d’entrainement libres, poids libres jusque 60 kilos, barres…
<br/>Pectoraux, épaules, dos, bras, cuisses, abdominaux… vous allez pouvoir travailler
tous les groupes musculaires en variant les exercices.<br/>

Notre équipe est présente pour vous conseiller, vous guider et vous aider à pratiquer
en toute sécurité.</span>
      
    </div>
    <div className='right-car'>
    <div>
    </div>
    <div></div>
    <img src={sld} alt='' className='muscul-image'/>
  
    </div>
    </div>
  )
}

export default Musculation