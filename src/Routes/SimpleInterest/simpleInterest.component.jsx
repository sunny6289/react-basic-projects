
import Input from '../../Project Components/simpleInterest/Input/input.component';
import Button from '../../Project Components/simpleInterest/button/button.component';
import { useState, useEffect } from 'react';
import './simple-interest.style.css';

const SimpleInterest = ()=>{
  const [amnt, setAmnt] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  useEffect(()=>{
    document.title = "Simple Interest Calculator";
  },[]);

  const amntChange = (e) => {
    setAmnt(e.target.value);
  }
  const interestChange = (e) => {
    setInterest(e.target.value);
  }
  const timeChange = (e) => {
    setTime(e.target.value);
  }

  const calculate = () => {
    if(Number(amnt) && Number(time) && Number(interest)){
      setResult((Number(amnt) * Number(time) * Number(interest)) / 100);
    }else{
      alert("All the fields are required.");
    }
  }
  const reset = () => {
    setAmnt('');
    setInterest('');
    setTime('');
    setResult('');
  }
    return(
<div className='simp-interest'>
        <h2 className='heading'>Simple Interest Calculator</h2>
        <div className="result">₹ {result}</div>
        <Input className={'amnt'} onChange={amntChange} placeholder={"Enter Amount (₹)"} value={amnt} />
        <Input className={'interest'} onChange={interestChange} placeholder={"Enter interest (%)"} value={interest} />
        <Input className={'time'} onChange={timeChange} placeholder={"Enter time (year)"} value={time} />
        <div className='buttonContainer'>
        <Button className={"calc"} onClick={calculate} value={"Calculate"} />
        <Button className={"reset"} onClick={reset} value={"Reset"} />
        </div>
      </div>
    )
}

export default SimpleInterest;