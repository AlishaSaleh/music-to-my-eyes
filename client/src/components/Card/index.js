import React, { useState, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import "./index.css";


const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

const alreadyRemoved = []
let newUsersState = db // This fixes issues with updating newUsers state forcing it to use the current state and not the state that was active when the card was created.

function Advanced () {
  const [newUsers, setnewUsers] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    newUsersState = newUsersState.filter(newUser => newUser.name !== name)
    setnewUsers(newUsersState)
  }

  const swipe = (dir) => {
    const cardsLeft = newUsers.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {newUsers.map((newUser, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={newUser.name} onSwipe={(dir) => swiped(dir, newUser.name)} onCardLeftScreen={() => outOfFrame(newUser.name)}>
            <div style={{ backgroundImage: 'url(' + newUser.url + ')' }} className='card'>
              <h3>{newUser.name}</h3>
              <h3>{newUser.age}</h3>
              <h3>{newUser.location}</h3>
              <h3>Top Songs:
                {newUser.}
              </h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
    </div>
  )
}

export default Advanced;