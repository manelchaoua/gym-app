import { Route, Routes } from 'react-router-dom';
import Activities from './components/activities/Activities';
import Cardio from './components/cardio/Cardio';
import Connexion from './components/connexion/Connexion';
import Contact from './components/contact/Contact';
import Espaces from './components/espaces/Espaces';

import Home from './components/home/Home';
import Inscription from './components/inscription/Inscription';
import Musculation from './components/musculation/Musculation';
import Navbar from './components/navbar/Navbar';
import Planning from './components/planning/Planning';

import Courscollec from './components/courscollec/Courscollec';
import Kids from './components/kids/Kids';
import Bacsport from './components/bacsport/Bacsport';
import Fitness from './components/fitness/Fitness';


function App() {
  return (
    <div >
      <Navbar />
      

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/espaces" element={<Espaces/>}/>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/planning" element={<Planning/>}/>
      <Route path="/musculation" element={<Musculation/>}/>
      <Route path="/cardio" element={<Cardio/>}/>
      <Route path="/courscollec" element={<Courscollec/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/bacsport" element={<Bacsport/>}/>
      <Route path="/fitness" element={<Fitness/>}/>
     </Routes>
    </div>
  );
}

export default App;
