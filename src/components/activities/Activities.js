import React from 'react'
import "./Activities.css";
import cc from '../../assets/cc.jpg';
import ce from '../../assets/ce.png';
import gymnas from '../../assets/gymnas.jpg';
const Activities = () => {
  return (
    <div>
  <div className='container-act'>
     <tr> <div className='card'>
          <div className='img'>
              <img src={cc} alt='' className='act1'/>
          </div>
          <div class="top-text">
              <div className="name">les cours collectifs</div>
          </div>
          <div class="bottom-text">
              
              <div className="btn ">
                  <a href='/courscollec'>découvrir</a>
              </div>
          </div>
      </div>
     
      </tr>
      <tr>
      <div className='card'>
          <div className='img'>
              <img src={ce} alt='' className='act2'/>
          </div>
          <div class="top-text">
              <div className="name">club enfant</div>
          </div>
          <div class="bottom-text">
              <div className="btn ">
                  <a href='/kids'>découvrir</a>
              </div>
          </div>
      </div>
      
     
      </tr>
      <tr>
      <div className='card'>
          <div className='img'>
              <img src={gymnas} alt='' className='act1'/>
          </div>
          <div class="top-text">
              <div className="name">bac sport</div>
          </div>
          <div class="bottom-text">
              <div className="btn ">
                  <a href='/bacsport'>découvrir</a>
              </div>
          </div>
      </div>
      
    
      </tr>
      </div>
  </div>
  )
}

export default Activities