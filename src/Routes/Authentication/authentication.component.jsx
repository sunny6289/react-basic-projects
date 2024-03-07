import { useEffect } from "react";
import SignInForm from "../../Component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";

import './authentication.styles.css';

const Authentication = ()=>{
    useEffect(()=>{
        document.title = "SIGN IN or SIGN UP";
    },[])
    return(
        <div className="auth-page">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;