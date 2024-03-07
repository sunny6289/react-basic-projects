import { Link } from "react-router-dom";

import './navigation.styles.css';

const Navigation = ()=>{
    return(
        <div className="navbar">
            <div>
                <Link className="heading" to='/'>
                    React Basic Projects
                </Link>
            </div>
            <div className="nav-links">
                <Link className="auth-page-link" to='/auth'>
                    SIGN IN or SIGN UP
                </Link>
            </div>
        </div>
    )
}

export default Navigation;