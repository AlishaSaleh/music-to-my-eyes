import React from 'react';
import '../App.css';
import Card from "../components/Card"

function Match() {
    return (
        <div>
            <div className="bg-image w-full h-auto flex flex-wrap justify-center items-center py-5">
                <div className="backdrop h-screen bg-white bg-opacity-10 rounded p-3 text-black border border-gray-300 shadow-lg">
                    {/* <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                        <h3 className="text-xl font-semibold text-shadow">Jane Doe</h3>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" className="w-full h-48 object-cover mb-2" />
                        <ul className="list">
                            <li>Song 1</li>
                            <li>Song 2</li>
                            <li>Song 2</li>
                        </ul>
                        <button className="backdrop-filter bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">Match</button>
                        <button className="backdrop-filter bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">Skip</button>
                    </div> */}
                    {Card}
                </div>
            </div>
        </div>
    )
}

export default Match;