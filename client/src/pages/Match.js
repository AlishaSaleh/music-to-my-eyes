import React from 'react';
import '../App.css';
import Card from '../components/Card'

function Match() {

    return (
        <div>
            <div className="w-full">
                <div className="relative h-full bg-red-light mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Match