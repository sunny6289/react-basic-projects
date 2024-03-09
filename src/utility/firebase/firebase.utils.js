import {
        getAuth,
        signInWithEmailAndPassword,
        signInWithPopup,
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signOut
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyCZiHR0hZEpRsIvYMVlGTX9GJb9A2ItrCk",
        authDomain: "react-basic-project-db.firebaseapp.com",
        projectId: "react-basic-project-db",
        storageBucket: "react-basic-project-db.appspot.com",
        messagingSenderId: "456751863580",
        appId: "1:456751863580:web:93c5c42819387b2a67ccd9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
        prompt: 'select_account',
})
const auth = getAuth();



export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const db = getFirestore();

export const createAuthUserDocument = async (userAuth) => {
        const userDocRef = doc(db, 'user', userAuth.uid);
        const docSnapShot = await getDoc(userDocRef);
        if (!docSnapShot.exists()) {
                const createdAt = new Date();
                const { displayName, email } = userAuth;
                try {
                        await setDoc(userDocRef, {
                                displayName,
                                email,
                                createdAt
                        })
                } catch (error) {
                        console.log(error.code);
                }

        }
        return userDocRef;
}
export const retrieveName = async(userAuth)=>{
        const userDocRef = doc(db,'user',userAuth.uid);
        const docSnapShot = await getDoc(userDocRef);
        // currentUser.displayName = docSnapShot.displayName;
        const info = docSnapShot.data();
        // const {currentUser, setCurrentUser} = useContext(UserContext)
        return info.displayName;
}
export const createAuthUserWithEmailAndPassword = async(email,password) => {
        if (!email || !password) {
                alert("All fields are required");
                return;
        }
        return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
        
        if (!email || !password) {
                alert("All fields are required");
                return;
        }
        return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async()=> signOut(auth);