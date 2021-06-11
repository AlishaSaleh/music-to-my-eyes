import React, { useRef } from "react"
import API from "../../utils/API"

export default function TrackSearchResult({ track }) {

  const stringTracks = `${track.title} - ${track.artist}`
  const trackDiv = useRef()

  function handleClick() {
    const divElement = {
      song: trackDiv.current.value
    }
    console.log(divElement)
    API.saveSongs(divElement).then(res => {
      console.log(res);
    });
  }
  return (
    <button
      value={stringTracks}
      ref={trackDiv}
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </button>
  )
}