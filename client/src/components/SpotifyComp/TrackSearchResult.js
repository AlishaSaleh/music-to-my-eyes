import React from "react"

export default function TrackSearchResult({ track}) {
  //chooseTrack(track)
  const saveTrack = () => {
    const savedTrackArr = []
    const q = ""
    localStorage.setItem("trackInfo", JSON.stringify(q));

    savedTrackArr.push(q);
    localStorage.setItem("savedTrackInfo", JSON.stringify(savedTrackArr));
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={saveTrack}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}
