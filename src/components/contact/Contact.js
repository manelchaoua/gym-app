import React from 'react'
import "./Contact.css";
function Contact() {
  return (
    <div>
      <section class="contact">
	<div class="content">
		<h2><b>Contact US</b></h2>
		<p><b>Envoyez-nous simplement vos questions ou préoccupations en démarrant un nouveau cas et nous vous donnerons l'aide dont vous avez besoin</b></p>
	</div>
	<div class="container-c">
		<div class="contactinfo">
			<div class="box">
				<div class="icon"><i class="fa fa-map-marker"></i></div>
				<div class="text">
					<h3>Adresse</h3>
					<p>Rue De Gabes Mednine</p>
				</div>
			</div>
				<div class="box">
				<div class="icon"><i class="fa fa-phone"></i></div>
				<div class="text">
					<h3>Téléphone</h3>
					<p>22221947</p>
				</div>
			</div>
			<div class="box">
				<div class="icon"><i class="fa fa-envelope"></i></div>
				<div class="text">
					<h3>Email</h3>
					<p>GymKarmi22@gmail.com</p>
				</div>
			</div>
			<div>
				<a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
				<a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
				<a href="" class="uk-icon-button" uk-icon="youtube"></a>
			</div>
		</div>
		<div class="contactform">
			<form>
				<div ><h2> Envoyer un Message</h2></div>
				<div class="inputbox">
					<input type="text" name="" required="required"/>
					<span>Nom</span>
				</div>
				<div class="inputbox">
					<input type="text" name="" required="required"/>
					<span>Email</span>
				</div>
				<div class="inputbox">
					<textarea required="required"></textarea>
					<span>Envoyez un Message...</span>
				</div>
				<div class="inputbox" >
					<input type="submit" name="" value="Envoyer"/>
				</div>
			</form>
		</div>
		
	</div>
</section>
    </div>
  )
}

export default Contact