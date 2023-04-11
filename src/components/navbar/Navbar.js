import React from 'react';
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='nav'>
		<nav>
		<div className='logo'> KARMI GYM</div>
			<ul>
             <li><a href='/'>Accueill</a></li>
			 <li><a href='/activities'>Nos Activités</a></li>
			 <li><a href='#'>Nos Espaces</a>
			 <ul>
				<li><a href='/fitness'> espace Fitness</a></li>
				<li><a href='/musculation'>espace Musculation</a></li>
				<li><a href='/cardio'> espace Cardio</a></li>
			 </ul>
		    </li>
			 <li><a href='/planning'>Planning</a></li>
			 <li><a href='/contact'>Contact</a></li>
			</ul>
			
		</nav>
	</div>
  )
}

export default Navbar