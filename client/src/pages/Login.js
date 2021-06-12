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

        API.loginUser(user).then(response => {
            if (response.status === 200) {
                setAuthToken(response.data.token);
                setAuthUser(response.data.user);
                window.location.replace("/dashboard");
                API.getDash()
            }
        }).catch(error => {
            const errors = Object.values(error.response.data);
            setErrorState(errors)
        })

    }


    return (

        <div>
            <div className="w-full">
                <div className="relative h-screen bg-red-light mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24">
                    
                    <form className="relative bg-white shadow-md w-full md:w-1/2 rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => submitLogin(e)} >
                        <h1 className="flex justify-center text-2xl font-bold">Login</h1>
                        <p className="flex justify-center">If you don't have an account yet, sign up <a className="mx-1" href="/signup">  here</a>!</p>

                   {errorState.map(error => (
                   <div className="bg-red border text-white text-s px-2 py-1 rounded relative" role="alert">
                   <span className="block sm:inline">{error}</span></div>))}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                        </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name@email.com" ref={emailRef} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                        </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*******" ref={passwordRef} />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-white transition duration-300 btn-shadow ease-in-out font-bold transform hover:scale-110 mx-3 py-2 px-4 rounded border" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}


export default Login;