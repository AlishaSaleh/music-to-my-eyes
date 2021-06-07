import React, { useState, useRef } from "react";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";

function Login() {

    // const [logUser, setLogin] = useState({
    //     email: "",
    //     password: "",
    // });

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitLogin = (e) => {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(user);

        API.loginUser(user).then(response => {
            // not getting here
            console.log('here')
            console.log(response)
            if (response.status === 200) {
                setAuthToken(response.data.token);
                console.log(response.data.token)
                // returning on localhost:3000 instead of 3001
                API.getDash().then(response => console.log(response));
            }
        });
    }



    return (


        <div className="row" >
            <form onSubmit={e => submitLogin(e)} className="col-md-6 offset-md-3 bodyPad">

                <h1>Login</h1>
                <p>Please sign up below:</p>

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