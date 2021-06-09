import React from "react"

export default function TrackSearchResult({ track}) {

  function handleClick(e) {
    e.preventDefault();
    console.log({track})
    console.log('The div was clicked.');
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}

// const saveTrack = () => {
//   const savedTrackArr = []
//   const q = ""
//   localStorage.setItem("trackInfo", JSON.stringify(q));

//   savedTrackArr.push(q);
//   localStorage.setItem("savedTrackInfo", JSON.stringify(savedTrackArr));
// }