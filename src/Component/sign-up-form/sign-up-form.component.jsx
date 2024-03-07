import { useState } from "react";
import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.css';

import {
    createAuthUserWithEmailAndPassword,
    createAuthUserDocument
} from '../../utility/firebase/firebase.utils';

// Initial values of the form fields
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields;
    console.log(formFields);
// Succesfull Sign Up text
    const successMessage = ()=>{
            document.querySelector(".auth-page").innerHTML = "Successfully signed up!";
            document.querySelector(".auth-page").style.fontSize = 40 + 'px';
            document.querySelector(".auth-page").style.fontWeight = 600;
            document.querySelector(".auth-page").style.color = "green";
    }
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
    // Will reset Form fields after successfull sign up
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }
    // This will create a authenticated user and put data into the database
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Password and Confirm password are not matching");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            console.log(user);
            user.displayName = displayName;
            await createAuthUserDocument(user);
            resetFormFields();
            successMessage();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email already in use")
            }
            console.log('Error while authentication',error.message);
        }
    }

    return(
        <div className="sign-up-section">
            <h1>SIGN UP</h1>
            <h2>Don't have an account?</h2>
            <form className="sign-up-form-container" onSubmit={handleSubmit}>
                <FormInput required className='form-input-box' type='text' placeholder='Name' onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput required className='form-input-box' type='email' placeholder='Email' onChange={handleChange} name='email' value={email}/>
                <FormInput required className='form-input-box' type='password' placeholder='Password' onChange={handleChange} name='password' value={password}/>
                <FormInput required className='form-input-box' type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit' className='form-button' description="Sign Up"/>
            </form>
        </div>
    )
}

export default SignUpForm;