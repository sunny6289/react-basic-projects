
import { useEffect } from 'react';
import Container from '../../Project Components/bmiCalculator/container/container.component';
const BMI = ()=>{
  useEffect(()=>{
    document.title = "BMI calculator";
  },[]);
  return(
  <div className='App'>
    <Container/>
  </div>
  )
}

export default BMI;