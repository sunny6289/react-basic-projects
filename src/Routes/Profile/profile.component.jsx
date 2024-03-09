import { UserContext } from "../../Contexts/user.context";
import { Fragment, useContext } from "react";
import './profile.component.css';
import Button from "../../Component/Button/button.component";
import { signOutUser } from '../../utility/firebase/firebase.utils';
import { Link } from "react-router-dom";

const Profile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutUserHandler = async()=>{
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <Fragment>
        {
            currentUser ? (<div className="profile">
                {
                    currentUser.photoURL ? (<img src={currentUser.photoURL} alt="pic" className="profile-photo"/>) : currentUser.displayName ? (<div className="profile-photo-letter-nav-link">{currentUser.displayName[0].toUpperCase()}</div>) : (<div className="profile-photo-letter-nav-link">@</div>)
                }
            
            <h3 className="profile-name">{currentUser.displayName}</h3>
            <p className="profile-email">{currentUser.email} {currentUser.emailVerified ? " ✅" : ""}</p>
            <Button className='sign-out' onClick={signOutUserHandler} description='SIGN OUT'></Button>
        </div>) : (<div className="post-sign-out-content"><h1>Please sign in to continue</h1>
                <Link to='/auth' className="go-to-sign-in-page">Go to sign in page</Link></div>)
        }
        </Fragment>
    );
}

export default Profile;
