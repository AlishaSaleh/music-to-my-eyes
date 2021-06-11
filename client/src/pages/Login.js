import React, { useState, useRef } from "react";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import setAuthUser from "../utils/setAuthUser";

function Login() {

    const [errorState, setErrorState] = useState([]);


    const emailRef = useRef();
    const passwordRef = useRef();

    const submitLogin = (e) => {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        //console.log(user);

        API.loginUser(user).then(response => {
            if (response.status === 200) {
                setAuthToken(response.data.token);
                setAuthUser(response.data.user);
                window.location.replace("/dashboard");
                API.getDash()
                //.then(response => console.log(response));
            }
        }).catch(error => {
            //console.log(error.response.data);
            const errors = Object.values(error.response.data);
            console.log(errors)
            setErrorState(errors)
        })

    }



    return (


        <div className="row" >
            <form onSubmit={e => submitLogin(e)} className="col-md-6 offset-md-3 bodyPad">

                <h1>Login</h1>
                <p>Please sign up below:</p>
               
               {errorState.map(error => (
                   <div className="bg-red border text-white text-s px-2 py-1 rounded relative" role="alert">
                   <span className="block sm:inline">{error}</span></div>))}

                <div className="mb-3">

                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email"
                        placeholder="name@example.com" ref={emailRef} />

                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" ref={passwordRef} />
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </div>

    );
}


export default Login;