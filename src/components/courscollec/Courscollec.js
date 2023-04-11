import React from 'react'
import "./Courscollec.css";
import aerobic from '../../assets/aerobics.jpg';
import cardio from '../../assets/cardio.jpg';
import rpm from '../../assets/rpm.jpg';
import abdo from '../../assets/abdos_fessier.jpg';
import bp from '../../assets/bp.jpg';
import box from '../../assets/box.jpg';
function Courscollec() {
  return (
    <div className='cour'>
     <section className='cours'>
     
        <h2 className='h2'><span className='span'>C</span>ours collectifs</h2>
       
        <div className='content-c'>
          <table>
            <tr>
            <td>
          <div className='frame'>
            <div className='box-c'>
              <img src={aerobic} alt=''/></div>
              <div className='title-c'>aerobic</div>
              <p>Le cours Aerobic combine des mouvements de danse sur les derniers tubes du moment. Les chorégraphies sont simples, afin que tout le monde puisse participer. Au cours Aerobic, vous vous amuserez tout en améliorant votre forme. Avec un résultat rapide en brûlant un maximum de calories !</p>
   
                </div>
                <div className='frame'>
            <div className='box-c'>
              <img src={rpm} alt=''/></div>
              <div className='title-c'> RPM</div>
              <p>Le RPM™ est le programme de cyclisme en salle, dans le cadre duquel vous roulez au rythme d’une musique entraînante. Prenez la route avec votre coach qui guidera le peloton par monts et par vaux, sur le plat, dans les ascensions, les contre-la-montre et « l’interval training » (entraînement fractionné). Découvrez l’athlète qui se cache en vous.</p>
   
                </div></td>
                <td>
                <div className='frame'>
            <div className='box-c'>
              <img src={abdo} alt=''/></div>
              <div className='title-c'>Abdos Fessier</div>
              <p>Les cours d’abdos fessiers sont très pratiqués dans les salles de fitness. Ils ont pour but de perdre du ventre et des fesses, pour obtenir des fesses toniques et un ventre plat.</p>
                </div>
                
                <div className='frame'>
            <div className='box-c'>
              <img src={bp} alt=''/></div>
              <div className='title-c'>Body PUMP</div>
              <p>Le BodyPump est un cours de fitness à vocation de renforcement musculaire complet, pré-chorégraphié et en musique faisant partie du concept Body Training System
                </p>
              </div>
                </td>
                <td>
                <div className='frame'>
            <div className='box-c'>
              <img src={box} alt=''/></div>
              <div className='title-c'> Kick Boxing</div>
              <p>le Kick-Boxing permet de travailler son endurance et de libérer les tensions du quotidien en affrontant ses peurs et ses angoisses.</p>
                </div>
                
                <div className='frame'>
            <div className='box-c'>
              <img src={cardio} alt=''/></div>
              <div className='title-c'>cardio mixte</div>
              <p>Le cardio mixte mélange le fitness, le crossfit, le kick boxing ainsi que l’entraînement cardio. En plus, de brûler des calories et d’améliorer votre condition cardio vasculaire, vous travaillez la musculation. Cela permet d’affiner la silhouette et de renforcer vos muscles afin de réduire le risque de blessures lors de futures activités sportives.</p></div>
                </td>
                </tr>
                </table> </div>
                </section> 
    </div>
  )
}

export default Courscollec