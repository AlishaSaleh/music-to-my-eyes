import React from 'react'

// grab everything we need
const gridItems = document.querySelectorAll(".grid-background > div");

// loop over grid items and create a random duration + delay for each
gridItems.forEach((item) => {
    // calculate random number for delay
    const delay = getRandomInt(0, 5);

    // calculate random number for duration
    const duration = getRandomInt(3, 6);

    // set both
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function HeroBg() {
    return (


        < div >
            <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2">
                {/* row 1 */}
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>

                {/* row 2 */}
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>

                {/* row 3 */}
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>

                {/* row 4 */}
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>

                {/* row 5 */}
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>

                {/* row 6  */}
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>

                {/* row 2 */}
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>

                {/* row 3 */}
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>

                {/* row 4 */}
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>

                {/* row 5 */}
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>

                {/* row 6  */}
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>


                {/* row 2 */}
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-5 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-1 bg-pink rounded-full animate-pulse"></div>

                {/* row 3 */}
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-2 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-3 bg-pink rounded-full animate-pulse"></div>
                <div className="col-span-4 bg-pink rounded-full animate-pulse"></div>


            </div>
        </div>
    )
}

export default HeroBg
