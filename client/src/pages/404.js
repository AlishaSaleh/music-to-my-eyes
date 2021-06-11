import React from 'react';
import Emoji from "../components/Emoji";

function error404() {
    return (
        // <div>
        //     <div className="w-full px-6">
        //         <div className="mt-8 relative rounded-lg bg-mint container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        //             <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10"></div>
        //             <div className="md:container md:mx-auto content-center">
        //                     <h1 className="text-black text-4xl">Oops! Something went wrong, let's try again.</h1>
        //                 <img alt="broken record" src="https://i.imgur.com/oMpeO5B.png" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
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


