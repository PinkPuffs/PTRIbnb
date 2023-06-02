import React from "react";

export default function Redirect () {
    const redirect = () => {
        window.location.href = "http://localhost:3000/google"
      };
    
     return ( 
        <div>
        <h1>Login Page</h1>
        <button onClick={redirect}>Login with Google</button>
      </div> 
   )

}