import React from 'react';

function error404() {
    return (
        <div>
            <div className="w-full px-6">
                <div className="mt-8 relative rounded-lg bg-mint container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10"></div>
                    <div className="md:container md:mx-auto content-center">
                            <h1 className="text-white text-4xl">Oops! Something went wrong, let's try again.</h1>
                        <img src="https://drive.google.com/thumbnail?id=1rukVDLTGZYhz-f_WTv6vx_aGQYhcys-O" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default error404;


