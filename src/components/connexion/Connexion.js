import React from 'react';
import "./Connexion.css";
const Connexion = () => {
  return (
    <div>

<section className='section-c'>
         
         <div class="form-container">
             <h1> Connexion</h1>
             <form action="#" >
                 <div class="control">
                     <span ><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
                     <label for="adress">Adresse</label>
                     <input type="text"  id="adress" name="Adr" required/>
                     </div>
                     
                 <div class="control">
                     <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                     <label for="psw">Mot de Passe</label>
                     <input type="password"  id="psw" name="Psw" required/>
                        </div>
                     
                 
                 <div class="control">
                     <input type="submit" value="connexion"/>
                 </div>
             
             <div className="link">
                 <p>tu as un compte !  <button type="button" class="btn btn-link"><a href='/inscription'>créer</a></button> </p>
                
             </div>
             </form>
             </div>
             </section>
    </div>
    )
}



export default Connexion