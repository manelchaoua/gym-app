import React from 'react'
import './Kids.js'
import karaté from '../../assets/karaté.jpg';
import box from '../../assets/box-e.jpg';
import judo from '../../assets/judo.jpg';
function Kids() {
  return (
    <div className='cour'>
     <section className='cours'>
     
        <h2 className='h2'><span className='span'>C</span>lub enfant</h2>
       
        <div className='content-c'>
          <table>
            <tr>
            <td>
          <div className='frame'>
            <div className='box-c'>
              <img src={karaté} alt=''/></div>
              <div className='title-c'>karaté</div>
              <p> la karaté est un art martial qui peut se pratiquer très tôt. Dans plusieurs pays , la plupart des enfants le pratique et il fait partie de leur éducation.</p>
                </div>
               </td>
                <td>
                <div className='frame'>
            <div className='box-c'>
              <img src={box} alt=''/></div>
              <div className='title-c'>kick boxing</div>
              <p>la boxe permet à un enfant de prendre confiance en lui, il est capable d'atteindre des objectifs, de progresser..</p></div>
                
                
                </td>
                <td>
                <div className='frame'>
            <div className='box-c'>
              <img src={judo} alt=''/></div>
              <div className='title-c'> judo</div>
              <p>Avec le judo, on est maître de son corps et de son esprit. On alterne entre force tranquille et détermination sans faille, calme et réactivité.</p></div>
                </td>
                </tr>
                </table> </div>
                </section> 
    </div>
 
  )
}

export default Kids