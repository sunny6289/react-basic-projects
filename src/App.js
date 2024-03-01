
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home/home.component';
import BMI from './Routes/BMI/bmi.component';
import SimpleInterest from './Routes/SimpleInterest/simpleInterest.component';
import Monster from './Routes/MonstersClub/monster.component';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/bmi-calculator' element={<BMI/>}/>
          <Route path='/simple-interest' element={<SimpleInterest/>}/>
          <Route path='/monster-club' element={<Monster/>}/>
        </Route> 
      </Routes>
    </div>
  )
}

export default App;
