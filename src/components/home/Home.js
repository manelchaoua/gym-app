import React, { useState } from 'react';

import "./Home.css";
import hero_image from '../../assets/hero_image.png';
import slide1 from '../../assets/perdre-du-poids-VF1.jpg';
import slide2 from '../../assets/sentrainer-en-dansant-min.png';
import slide3 from '../../assets/se-defouler1.png';
import slide4 from '../../assets/se-muscler.png';


function IMCCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(null);

  const calculateIMC = () => {
    const heightM = height / 100;
    const imc = weight / (heightM * heightM);
    setResult(imc.toFixed(2));
  };
 
  return (
    <div>
     <div className='home'>
      
      <div className='left-h'>
         <div className='the-best-ad'>
            <div></div>
            <span> Salle de sport et de fitness</span>
         </div>
         <div className='home-text'>
            <div>
              <span className='stroke-text'>Bienvenue</span>
              <span> à</span>
            </div>
            <div>
            <span> karmi gym</span>
            </div>
            
         </div> 
         <div className='figures'>
            <div>
              <span>+6</span>
              <span>coachs</span>
            </div>
            <div>
              <span>+200</span>
              <span>membres</span>
            </div>
            <div>
              <span>+4</span>
              <span>espaces</span>
            </div>
         </div>
          <div className='home-buttons'>
            <buttons  ><a className='btn' href='/connexion'>Connexion</a></buttons>
            <buttons  ><a className='btn' href='/inscription'>Inscription</a></buttons>
            
          </div>
        </div>
        
        
      <div className='right-h'>
        <img src={hero_image} alt='' className='home-image'/>
      </div> 
      </div>
      <section>
      <marquee ><h2 class="obj"> OBJECTIF À ATTEINDRE </h2></marquee> 
  </section>
  <section>
  <div class="slider">
  <figure>
  <div className='slide'>
  
  <img src={slide1} alt='' className='slide1'/>
  </div>
  <div className='slide'>
  
    <img src={slide2} alt="" className='slide2'/>
  </div>
  <div className='slide'>
  
    <img src={slide3} alt="" className='slide3'/>
  </div>
  <div className='slide'>
  
  <img src={slide4} alt="" className='slide4'/>
  </div>
  </figure>
  </div>
  </section>
  <section>


<div className='container'>
<header>
<h2><b>CALCULER VOTRE IMC</b></h2>
<p>Votre calculateur d'IMC génère le nombre de calories que votre corps brûle par jour au repos. Votre IMC avec facteur d'activité est le nombre de calories que votre corps brûle par jour en fonction du facteur d'activité que vous avez sélectionné.</p>

</header>
<form action="#" className="form"  >
<section class="column">
<div class="input-box">

<label for="weight">Weight (in kg): </label>
<input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required/>

</div>
<div class="input-box">
  <label for="height">Height (in cm): </label>
  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required/>
 </div> 
</section>
   <div class="input-box">
    <input type="number" placeholder="Age" required/>
 </div>
 <div class="column">
   <div class="select-box">
       <select>
           <option>Sexe</option>
           <option>Femme</option>
           <option>Homme</option>

       </select>
   </div>
  
   </div>
  
   <button type="button"  className='calc' onClick={calculateIMC}>Calculate</button>
   {result && (
        <div>Votre IMC est de {result}.<br />
          {result < 18.5 ? "Vous êtes en insuffisance pondérale." : ""}
          {(result >= 18.5 && result < 25) ? "Vous avez une corpulence normale." : ""}
          {(result >= 25 && result < 30) ? "Vous êtes en surpoids." : ""}
          {result >= 30 ? "Vous êtes en obésité." : ""}
        </div>
      )}
   </form>
</div>

</section>


   
<footer>
<div class="container">
<div class="row">
  <div class="col-md-3 col-sm-6">
    <h4>A propos de nous</h4>
    <p></p></div>
  <div class="col-md-3 col-sm-6">
    <h4>Nos services</h4>
    <ul>
      <li><a href="/espaces">nos espaces</a></li>
      <li><a href="/planning">planing</a></li>
      <li><a href="/activities">nos activités</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
  </div>

  
  <div class="col-md-3 col-sm-6">
    <h4>Contactez-nous</h4>
    <ul>
      <li><i class="fa fa-map-marker" aria-hidden="true"></i> Route de gabes ,Mednine</li>
      <li><i class="fa fa-phone" aria-hidden="true"></i> 22221947</li>
      <li><i class="fa fa-envelope" aria-hidden="true"></i> GymKarmi22@gmail.com</li>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <hr/>
    <div class="text-center">
      <ul class="list-inline">
        
         <li><i class="fa fa-facebook-official" aria-hidden="true"></i> <a href="https://www.instagram.com/karmi_gym/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR1oPSEu-FVVY0sBD-juICTwcXOGnu_8kesGEivQtylOdIuXl1MT6_oDFRo" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a></li>
         <li> <i class="fa fa-instagram" aria-hidden="true"></i><a href="https://www.facebook.com/profile.php?id=100076558252510" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a></li>
          <li><i class="fa fa-youtube-square" aria-hidden="true"></i><a href="" class="uk-icon-button" uk-icon="tiktok"></a></li>
        
      </ul>
    </div>
    <div class="text-center">
      <p>Tous droits réservés © Mon Site 2023</p>
    </div>
  </div>
</div>
</div>
</footer>
  </div>
   )
}
export default IMCCalculator;