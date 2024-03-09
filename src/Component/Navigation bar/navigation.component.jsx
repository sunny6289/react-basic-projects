import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import './navigation.styles.css';
import { useContext } from "react";

const Navigation = ()=>{
    const { currentUser } = useContext(UserContext);
    return(
        <div className="navbar">
            <div>
                <Link className="heading" to='/'>
                    React Basic Projects
                </Link>
            </div>
            <div className="nav-links">
                {
                    currentUser ?  (<Link to='/profile'>{currentUser.photoURL ? (<img className="profile-page" src={currentUser.photoURL}/>) : (<div className="profile-photo-letter-nav-link">{currentUser.displayName[0].toUpperCase()}</div>)}</Link>)
                                :(<Link className="auth-page-link" to='/auth'>SIGN IN or SIGN UP
                                    </Link>)
                }
            </div>
        </div>
    )
}

export default Navigation;