import { Fragment, useContext, useEffect } from "react";
import SignInForm from "../../Component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";

import './authentication.styles.css';
import { UserContext } from "../../Contexts/user.context";
import { Link } from "react-router-dom";

const Authentication = ()=>{
    const { currentUser } = useContext(UserContext);
    useEffect(()=>{
        document.title = "SIGN IN or SIGN UP";
    },[])
    return(
        <div className="auth-page">
            {
                currentUser ? (<div className="post-sign-in-content"><h1>Authentication Successfull</h1>
                <Link to='/' className="go-to-home">Go to Home</Link></div>
                    
                    ) : (<Fragment><SignInForm/><SignUpForm/></Fragment>)
            }
            
        </div>
    )
}

export default Authentication;