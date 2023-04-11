import React from 'react'
import './Cardio.css'
import t from '../../assets/t.jpg';
function Cardio() {
  return (
    <div className='cardio'>
    <div className='left-car'>
      <span>espace cardio</span>
      
      <span>Notre espace cardio-training dispose d’un équipement complet, simple d’utilisation et régulièrement rénové, pour vous permettre d’améliorer votre endurance, votre condition physique, vous faire perdre du poids  en brûlant les graisses…

</span>
      
    </div>
    <div className='right-car'>
    <div>
    </div>
    <div></div>
    <img src={t} alt='' className='muscul-image'/>
  
    </div>
    </div>

  )
}

export default Cardio