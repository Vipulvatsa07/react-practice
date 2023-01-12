import { createContext, useState } from "react";

// <!-- STEP 1. CREATE CONTEXT -->
//  import createContext
// use

export const AuthContest=createContext();


// 2.A Provide
// create custom Provider Component;
function AuthContestProvider({children}){
     const [isAuth,setIsAuth]=useState(false)
     const toggle=()=>{
        setIsAuth(!isAuth)
     }

    return(
            // data is provided here
        <AuthContest.Provider value={{isAuth,toggle}}>
        {children}
    </AuthContest.Provider>
    )
    
}
export default AuthContestProvider;

