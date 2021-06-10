import React, { useEffect, useState } from 'react'
import API from "../utils/API";

import { isAuth } from '../utils/isAuth';

function Profile() {
    const [loggedUser, setLogged] = useState()

    useEffect(() => {
        async function fetchData() {
            API.getDash().then(response => {
                // console.log(response.data.user)
                setLogged(response.data.user);
            });
        };
        fetchData()
    }, []);

    // console.log(loggedUser)

    return (

        <div>
            <main className="profile-page">
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            {/* profile picture */}
                                            {/* <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        Welcome, {loggedUser}
                  </h3>
                                    <button
                                        className="bg-gradient-to-r from-pink to-purple uppercase text-white font-bold hover:sh adow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                        Settings
                      </button>
                                </div>

                                <div>
                                    <div className="flex flex-wrap -mx-3 overflow-hidden">
                                        <div className="my-3 px-3 w-1/2 overflow-hidden bg-red rounded-l bg-opacity-50">
                                            <h1>My Music</h1>
                                            <p> User's chosen music will go here</p>
                                        </div>
                                        <div className="my-3 px-3 w-1/2 overflow-hidden bg-red rounded-l bg-opacity-50">
                                            <h1>Messenger</h1>
                                            <p> Matches will show here and then you can message them, will lead to chat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Profile