// export function authenticate(user) {
//   if(user.logged_in === true){
//     isAuthenticated = true;
//   }
// };

// var isAuthenticated = false;
import React, { useState } from "react";


export function IsAuthenticated(user) {

    const [isAuthenticated, setAuthentication] = useState(false);
    setAuthentication(true);  

    return {
        isAuthenticated
    }
}

export default isAuthenticated;