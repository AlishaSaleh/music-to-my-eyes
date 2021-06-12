import React from "react";
import Emoji from "../components/Emoji";
import API from "../utils/API";
import HeroBg from "../components/HeroBg"

function Home() {
    return (
        <>
            <div>
                <div className="w-full">
                    {/* hero */}
                    <div className="relative bg-red mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32">
                        <HeroBg />
                        <div className="relative w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Press play on your love life!</h1>
                        </div>
                        {window.localStorage.getItem('user') === null ?
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2">
                            <button type="button" onClick={API.goToSignUp} className="bg-white text-2xl transition duration-300 btn-shadow ease-in-out font-bold transform hover:scale-110 mx-3 py-2 px-4 rounded border">Sign Up</button>
                            <button type="button" onClick={API.goToLogin} className="bg-white text-2xl transition duration-300 btn-shadow ease-in-out font-bold transform hover:scale-110 mx-3 py-2 px-4 rounded border">Login</button>
                        </div>
                        :
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2">
                            <button type="button" onClick={API.goToDashboard} className="bg-white text-2xl transition duration-300 btn-shadow ease-in-out font-bold transform hover:scale-110 mx-3 py-2 px-4 rounded border">Dashboard</button>
                            <button type="button" onClick={API.goToMatch} className="bg-white text-2xl transition duration-300 btn-shadow ease-in-out font-bold transform hover:scale-110 mx-3 py-2 px-4 rounded border">Match</button>
                        </div> }
                        <div>
                            <div className="relative flex flex-col items-center px-6 pb-0"><img alt="heart soundwave" src="https://i.imgur.com/Php4ic5.png" /></div>
                        </div>
                    </div>

                    {/* two col */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="col-span-1">
                        <div className="relative flex flex-col items-center p-6"><img alt="love balloons" src="https://source.unsplash.com/VDiGTEO0TYY/2400x1582" /></div>
                            </div>
                        <div className="col-span-1 text-center p-10 pt-20">
                            <h2>Find your cliché <Emoji symbol="💕" aria-label="hearts" /></h2>
                            <p>It's time to find your playlist partner! </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
