import React from 'react';
import Emoji from "../components/Emoji";

function error404() {
    return (
        <div>
            <div className="w-full">
                <div className="relative grid bg-pinklight h-screen" >
                    <div className="text-center pt-10">
                        <h2 className="text-5xl">Oops something went wrong <Emoji symbol="💔" aria-label="broken heart" /></h2>
                    </div>
                    <div className="relative flex flex-col items-center"><img alt="broken record" src="https://i.imgur.com/OkLefXx.png" /></div>

                </div>
            </div>
        </div>
    )
}

export default error404;


