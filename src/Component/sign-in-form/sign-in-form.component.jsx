import FormInput from "../form-input/form-input.component";
import Button from "../Button/button.component";
import './sign-in-form.styles.css';

import { useContext, useState } from "react";

import { 
    createAuthUserDocument,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    retrieveName
 } from '../../utility/firebase/firebase.utils';
import { UserContext } from "../../Contexts/user.context";
 // Initial value of the form fields
const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    
    const { setCurrentUser } = useContext(UserContext);
    const {email,password} = formFields;

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
// Will check if the user has valid data or not and then sign in
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email,password);
            // console.log(user);
            user.displayName = await retrieveName(user);
            setCurrentUser(user);
        }catch(error){
            if(error.code === 'auth/invalid-credential'){
                alert("Error: Invalid email or password");
                resetFormFields();
            }else if(error.code === 'auth/too-many-requests'){
                alert("Error: Too many requests");
                resetFormFields();
            }
            console.log(error.message);
        }
    }

    // Reset the form fields after successfull sign in
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }
    // It will help in sign in with google
    const signInWithGoogle = async()=>{
        try{
            const {user} = await signInWithGooglePopup();
            await createAuthUserDocument(user);
            setCurrentUser(user);
        }catch(error){
            console.log('Error: ',error.message);
        }
    }

    return(
        <div className="sign-in-section">
            <h1>SIGN IN</h1>
            <h2>Already have an account?</h2>
            <form className="sign-in-form-container" onSubmit={handleSubmit}>
                <FormInput required className='form-input-box' placeholder='Email' type='email' onChange={handleChange} name='email' value={email}/>
                <FormInput required className='form-input-box' placeholder='Password' type='password' onChange={handleChange} name='password' value={password}/>
                <div className="form-input-button-container">
                    <Button type='submit' className='form-button' description="Sign In"/>
                    <Button type='button' className='form-button google-sign-in-btn' description="Sign In With Google" onClick={signInWithGoogle}/>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;