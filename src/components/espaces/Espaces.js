import React from 'react'
import './Espaces.css'
import force from '../../assets/force.jpg';
import fitness from '../../assets/BODY-STEP.png';
import ec from '../../assets/ec.jpg';
function Espaces() {
  return (
    <div className='slidershow middle'>
      <div className='slidesss'>
        <input type='radio' name='r' id='r1' checked />
        <input type='radio' name='r' id='r2' checked />
        <input type='radio' name='r' id='r3' checked />
      
       <div className='sliide'>
       <img src={fitness} alt='' className='muscul-image'/>
       </div>
       <div className='sliide'>
       <img src={ec} alt='' className='muscul-image'/>
       </div>
       <div className='sliide'>
       <img src={force} alt='' className='muscul-image'/>
       </div>
       </div>
       <div className='navigation'>
        <label for='r1' className='bar'></label>
        <label for='r2' className='bar'></label>
        <label for='r3' className='bar'></label>
       </div>
    </div>
  )
}

export default Espaces