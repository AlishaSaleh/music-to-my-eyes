import React, { useState, useMemo, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import "./index.css";
import API from "../../utils/API";

// holds the people already shown to the user to avoid repetition 
const alreadyRemoved = [];
const liked = [];

function CardMatch() {
  const [characters, setCharacters] = useState([])
  const [lastDirection, setLastDirection] = useState()

  let charactersState = characters;

  useEffect(() => {
    async function fetchData() {
      API.getUsers().then((res) => {
          console.log(res.data.users);
          // console.log(res.data.users[0].image);
          setCharacters(res.data.users);
      });
    };
    fetchData()
  }, [])


  const childRefs = useMemo(() => Array(characters.length).fill(0).map(i => React.createRef()), []);
  console.log(childRefs);

  const swiped = (direction, nameToDelete) => {
    console.log(direction);
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person._id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]._id // Find the card object to be removed
      const index = characters.map(person => person._id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  // Need to randomise users before rendering to Cards
  // Need to add PUT request for likes and dislikes


  console.log(alreadyRemoved);

  return (
    <div>
      <h1>Are they the music to your eyes?</h1>
      <br />
      <br />
      <br />
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character._id} onSwipe={(dir) => swiped(dir, character._id)} onCardLeftScreen={() => outOfFrame(character._id)}>
            <div style={{ backgroundImage: 'url(' + character.image + ')' }} className='card'>
              <h3>{character.name}</h3>
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

export default CardMatch