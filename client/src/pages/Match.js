import React from 'react';
import '../App.css';
import Card from '../components/Card'

function Match() {
    return (
        <div>
            <div className="bg-image w-full h-auto flex flex-wrap justify-center items-center py-5">
                <div className="backdrop h-screen bg-white bg-opacity-10 rounded p-3 text-black border border-gray-300 shadow-lg">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Match