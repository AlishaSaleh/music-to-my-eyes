import React, { useState } from "react";
function Home() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                {/* <nav className="w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="https://drive.google.com/thumbnail?id=1wrKHE8yDrIQ7GlOzDzb_1PvTbqPo7is7" className="object-scale-down h-10 w-10" />
                            <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">Music To My Eyes</p>
                        </div>
                        <div>
                            <div onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </div>
                            <div id="menu" className={show ? "lg:hidden block" : "md:block lg:block hidden"}>
                                <div onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                                <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Login</a>
                                    </li>
                                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <div className="w-full px-6">
                    <div className="relative rounded-lg bg-gradient-to-r from-red to-red-light container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Press play on your love life!</h1>
                        </div>
                        <div className="flex justify-center items-center mb-10 sm:mb-20">
                            <div className="inline-block mr-2 mt-2">
                            <button type="button" class="text-4xl transition duration-300 ease-in-out transform hover:scale-110 border border-pink hover:bg-gradient-to-r from-pink to-purple text-mint-dark hover:text-white font-normal py-2 px-4 rounded">Sign Up</button>
                            </div>
                            <div class="inline-block mr-2 mt-2">
                            <button type="button" class="btn-outline text-4xl transition duration-300 ease-in-out transform hover:scale-110 border border-mint-dark hover:bg-mint-dark text-mint-dark hover:text-white font-normal py-2 px-4 rounded">Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                        <div className="relative sm:w-2/3 w-11/12">
                            {/* <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png" alt className="absolute" /> */}
                            <img src="https://drive.google.com/thumbnail?id=1NWXErFipm2mTdSJJOE6YCaSdAwlZQetU" className="absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
