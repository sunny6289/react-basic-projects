
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home/home.component';
import BMI from './Routes/BMI/bmi.component';
import SimpleInterest from './Routes/SimpleInterest/simpleInterest.component';
import Monster from './Routes/MonstersClub/monster.component';
import InitialHome from './Routes/InitialHome/initialhome.component';
import Authentication from './Routes/Authentication/authentication.component';

import Profile from './Routes/Profile/profile.component';
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<InitialHome/>}></Route>
          <Route path='/bmi-calculator' element={<BMI/>}/>
          <Route path='/simple-interest' element={<SimpleInterest/>}/>
          <Route path='/monster-club' element={<Monster/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/auth' element={<Authentication/>}/>
        </Route> 
      </Routes>
    </div>
  )
}

export default App;
