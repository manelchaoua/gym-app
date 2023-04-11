import React from 'react'
import './Bacsport.css'
import bcc from '../../assets/bcc.jpg';
function Bacsport() {
  return (
    <div className='courg'>
     <section className='coursg'>
     
        <h2 className='h2'><span className='span'>b</span>ac sport</h2>
       
        <div className='content-g'>
          <table>
            <tr>
            <td>
          <div className='frame-g'>
            <div className='box-g'>
              <img src={bcc} alt=''/></div>
              <div className='title-c'>bac sport</div>
              <p>Karmi Gym vous propose des séances de préparation et d’entrainement en gymnastique pour le Bac Sport (filles/garçons).

Des spécialistes à votre disposition et des horaires bien flexibles.
<br/>
Au programme :
<br/>
1.Conseiller et aider les candidats à choisir un enchaînement adapté à sa condition physique.<br/>
2.Travailler sur le renforcement musculaire et la souplesse pour préparer votre corps à enchaînement.<br/>
3.Préparer l’enchaînement complet et spécifique selon les capacités des candidats.</p>
                </div>
    </td></tr></table>
    </div>
    </section>
    </div>
    
    

  )
}

export default Bacsport