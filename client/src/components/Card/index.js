import React, { useState, useMemo, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./index.css";
import API from "../../utils/API";

// holds the people already shown to the user to avoid repetition 
const alreadyRemoved = [];

function CardMatch() {
  const [userMatch, setuserMatch] = useState([])
  const [lastDirection, setLastDirection] = useState()
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  // setting the state
  const likes = (dir, user) => {
    if (dir === "right") {
      const likedUserId = {
        id: user
      }
      API.addLike(likedUserId).then(res => {
      });
    }
  }

  // 2: send the array to the database through the API.addLike()
  let userMatchState = userMatch;

  useEffect(() => {
    async function fetchData() {
      API.getUsers().then((res) => {
        // exclude users that the user already has in 'likes'
        // exclude the currently logged in user        
        setuserMatch(res.data.users);
      });
    };
    fetchData()
  }, []);



  const childRefs = useMemo(() => Array(userMatch.length).fill(0).map(i => React.createRef()), []);
  // // returning empty array
  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    userMatchState = userMatchState.filter(user => user.name !== name)
    setuserMatch(userMatchState)
  }

  return (
    <div>
      <div>
      <h1 className="text-2xl">{loggedUser.name}, are they the music to your eyes?</h1>
      <div className="relative space-y-10">
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe to the right to like!</h2>}
      </div>
      </div>
        {userMatch.map((user, index) =>
          <TinderCard
            ref={childRefs[index]}
            className='swipe relative bg-white bg-no-repeat shadow-md md:w-1/3 w-full rounded px-8 pt-6 pb-8 mb-10'
            style={{ maxWidth: 500 }}
            key={user.id}
            onSwipe={(dir) => {
              likes(dir, user.id)
              swiped(dir, user.id)
            }}
            onCardLeftScreen={() => outOfFrame(user.id)}>
            <div className="">
              <img src={user.image} className="w-full" alt={user.name}></img>
              <h2>{user.name}</h2>
              <h4>{user.gender} | {user.location} | {user.orientation}</h4>
              <br/>
              <ul>
                <h4 className="font-bold">Top Songs:</h4>
                <li>{user.top_songs[0]}</li>
                <li>{user.top_songs[1]}</li>
                <li>{user.top_songs[2]}</li>
              </ul>
            </div>
          </TinderCard>
        )}
    </div>
  )
}

export default CardMatch