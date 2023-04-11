import React from 'react'
import'./Inscription.css'
const Inscription = () => {
  return (
    <div className='inscri'>
      <section class="container-ins">
       <header> INSCRIPTION </header>
        <form action="#" class="form-ins">
            <div class="input-box">
            <i class="fa fa-user" aria-hidden="true"></i>
                <label> Nom et Prénom</label>
                 <input type="text" placeholder="enter votre nom et prénom" name="fName"required/>
                 
              </div>
              <div class="input-box">
              <i class="fa fa-envelope" aria-hidden="true"></i>
                <label> adresse email</label>
                 <input type="email" placeholder="entrer votre adresse email" name="email"  required/>
 
              
              </div> 

              <div class="column">
              
                <div class="input-box">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                <label>Numero de telephone</label>
                 <input type="number" placeholder="entrer votre numéro de telephone" name="Num" required/>
                 
              </div>

               <div class="input-box">
               <i class="fa fa-calendar" aria-hidden="true"></i>
                <label> date de naissance</label>
                 <input type="date" placeholder="entrer votre date de naissance"name="date" required/>
                
              
              </div>
            </div>
            <div class="gender-box">
              <h3>Genre</h3>
              <div class="gender-option">
                <div class="gender">
              < i class="fa fa-female" aria-hidden="true"></i>
                    <input type="radio" id="check-male" name="gender" checked/>
                    <label for="check-male">femme</label>
                </div>
                <div class="gender">
                <i class="fa fa-male" aria-hidden="true"></i>
                    <input type="radio" id="check-female" name="gender" checked/>
                    <label for="check-female">homme</label>
                </div>
              </div>
            </div>
            <div class="input-box" addres>
              <label>plus d'information </label>
               
               <div class="column">
                <div class="select-box">
                    <select>
                        <option>Objectif a atteindre</option>
                        <option>perte de poids</option>
                        <option>se defouler</option>
                        <option>se muscler</option>
                        <option>s'entrainer</option>
                    </select>
                </div>
                <input type="number" placeholder="Poids" required/>
               </div>
               </div>
               <div class="input-box">
               <i class="fa fa-user" aria-hidden="true"></i>
                <label> Adresse</label>
                 <input type="text" placeholder="entrer votre adresse" name="adr"required/>
            
              </div>
              <div class="input-box">
              <i class="fa fa-unlock-alt" aria-hidden="true"></i> 
                <label>Mot de passe </label>
                 <input type="password" placeholder="entrer votre mot de passe " name="psw"  required/>
 
              
              </div> 
           
              <button>Inscription</button>
    </form>
    </section>
              
                
  
    </div>
  )
}

export default Inscription