import { useEffect, useState } from "react";
import SearchBox from "../search box/searchBox.component";
import './container.css';
const Container = (props)=>{
    const [bmiVal,setBmiVal] = useState(0);
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [remark,setRemark] = useState('');

    // To show the remark whenver BMI value changes
    useEffect(()=>{
        const bmi = bmiVal;
        if(bmi<16){
            setRemark('Severe Thinness')
        }else if(bmi>=16 && bmi<17){
            setRemark('Moderate Thinness')
        }else if(bmi>=17 && bmi<18.5){
            setRemark('Mild Thinness')
        }else if(bmi>=18.5 && bmi<25){
            setRemark('Normal')
        }else if(bmi>=25 && bmi<30){
            setRemark('Overweight')
        }else if(bmi>=30 && bmi<35){
            setRemark('Obese Class I')
        }else if(bmi>=35 && bmi<40){
            setRemark('Obese Class II')
        }else{
            setRemark('Obese Class III')
        }
    },[bmiVal])

    // On Clicking the reload button
    const onReload = ()=>{
        document.querySelector(".bmiValue").style.opacity = 0;
        document.querySelector(".remark").style.opacity = 0;
        // document.querySelector(".height").value = '';
        // document.querySelector(".weight").value = '';
        setHeight('');
        setWeight('');
    }

    // To set the value of height 
    const onChangeHeight = (event)=>{
        setHeight(Number(event.target.value));
    }
    // To set the value of height 
    const onChangeWeight = (event)=>{
        setWeight(Number(event.target.value));
    }
    // To set the value of BMI and show result
    const onSubmit =()=>{
        if(Number(weight)===0 || Number(height)===0){
            alert("All fields are required");
            return;
        }
        document.querySelector(".bmiValue").style.opacity = 1;
        document.querySelector(".remark").style.opacity = 1;
        setBmiVal(Number(weight)/(Number(height)*Number(height)));
    }
    return (
        <div className="container">
            <p className="title-name">BMI calculator</p>
            <SearchBox 
            className={'height'}
            placeholder={'Enter height (m)'}
            onChange = {onChangeHeight}
            value = {height}
            />
            <SearchBox
            className={'weight'}
            placeholder={'Enter weight (kg)'}
            onChange = {onChangeWeight}
            value = {weight}
            />
            <div className="button-container">
            <button className="submitBtn" onClick={onSubmit} >Submit</button>
            <button className="reloadBtn" onClick={onReload}>Reload</button>
            </div>
            <div className="remark-container">
                <p className="bmiValue">Your BMI is {bmiVal} </p>
                <p className="remark">Your are {remark}</p>
            </div>
        </div>
    )
}

export default Container;