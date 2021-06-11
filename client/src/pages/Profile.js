import React, { useEffect, useState } from 'react'
import API from "../utils/API";
import HeroBg from "../components/HeroBg"

function Profile() {

    const [loggedName, setName] = useState();
    const [loggedMatches, setMatches] = useState([]);
    const [loggedImage, setImage] = useState([]);


    useEffect(() => {
        async function fetchData() {
            API.getDash().then(response => {
                console.log(response.data)
                setName(response.data.name);
                setMatches(response.data.matches);
                setImage(response.data.image);

            });
        };
        fetchData()
    }, []);

    const matchArr = [];

    useEffect(() => {
        async function fetchMatch() {
            loggedMatches.map(matchId => API.getUser(matchId).then(response => {
             console.log(response.data.name);
             matchArr.push(response.data.name);
             console.log(matchArr);
             return matchArr

            }));
            
        };
        fetchMatch()
    }, [loggedMatches]);


    console.log(matchArr);

    // const matchArr = loggedUser.matches;
    return (

        <div>
            <main className="profile-page">

                {/* bg header */}
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover">
                        <HeroBg />
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-30 bg-black"
                        ></span>
                    </div>
                </section>

                {/* profile */}
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            {/* profile picture */}
                                            <img
                                                alt="..."
                                                src={loggedImage}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                                style={{ maxWidth: "150px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">

                                        Welcome, {loggedName}

                                    </h3>

                                    <button
                                        className="bg-gradient-to-r from-pink to-purple uppercase text-white font-bold hover:sh adow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}>
                                        Settings
                                     </button>
                                </div>

                                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 p-3">

                                    {/* music */}
                                    <div className="col-span-1 text-center p-5 pt-20 bg-gradient-to-r from-red to-pink rounded-2xl">
                                        <h1 className="text-2xl pb-6">My Music</h1>
                                        <button onClick={API.goToSpotify} type="button" className="transition duration-300 btn-shadow ease-in-out transform hover:scale-110 mx-3 py-2 px-4 rounded border p-4">Add your favourite songs
                                        <img className="pt-2" alt="spotify logo" src="https://drive.google.com/thumbnail?id=1bj86C-TKkcSqVzxLqdoHLqxuDU68OdPm" /></button>
                                    </div>

                                    {/* matches */}
                                    <div className="col-span-1 text-center p-5 pt-20 bg-gradient-to-l from-red to-pink rounded-2xl">
                                        <h1 className="text-2xl">My Matches</h1>
                                        <p>It's time to find your playlist partner! </p>
                                        <ul>
                                            {loggedMatches.map(match => (
                                                <li>{match}</li>
                                            ))}
                                        </ul>

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