import React, { useRef, useState } from "react"
import API from "../../utils/API"

export default function TrackSearchResult({ track }) {

  const [alertState, setAlert] = useState([]);

  const stringTracks = `${track.title} - ${track.artist}`
  const trackDiv = useRef()

  function handleClick() {
    const divElement = {
      song: trackDiv.current.value
    }
    API.saveSongs(divElement).then(res => {
      const clickMe = Object.values(divElement)
      setAlert(alertState => [...alertState, clickMe])
    });
  }
 

  return (
    <>
    {alertState.map(alert => (
      <div class="bg-red border text-white text-s px-2 py-1 rounded relative" role="alert">
          <span class="block sm:inline">You have added {alert} to your top songs!</span>
      </div>
  ))}
    <button
      value={stringTracks}
      ref={trackDiv}
      className="d-flex m-2 text-left"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img src={track.albumUrl} alt={track.title} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </button>
    </>
  )
}