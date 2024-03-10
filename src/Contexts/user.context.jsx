import { createContext, useEffect, useState } from "react";

import { createAuthUserDocument, onAuthStateChangedListener,
    retrieveName } from '../utility/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>async()=>{
        const removeListener = onAuthStateChangedListener(async(user)=>{
            
            if(user){
                await createAuthUserDocument(user);
                if(user.displayName===null){
                    user.displayName = await retrieveName(user)
                }
            }
            setCurrentUser(user);
        })
        return removeListener;
    },[]);

    const value = {currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}