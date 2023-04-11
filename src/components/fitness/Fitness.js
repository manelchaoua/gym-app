import React from 'react'
import'./Fitness.css'
import f from '../../assets/f.jpg';
function Fitness() {
  return (
    <div className='cardio'>
    <div className='left-car'>
      <span>espace fitness</span>
      
      <span>L'espace Fitness où ce déroulent l'ensemble des cours collectifs.<br/> karmi GYM vous propose des cours encadrés par des professionnels Pour vous tonifier, modeler votre silhouette, avoir une meilleure posture ,  améliorer votre condition physique, vous dépenser, bruler les calories, tout en vous amusant ..
</span>
      
    </div>
    <div className='right-car'>
    <div>
    </div>
    <div></div>
    <img src={f} alt='' className='muscul-image'/>
  
    </div>
    </div>
  )
}

export default Fitness