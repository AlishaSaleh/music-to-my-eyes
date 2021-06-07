import React from "react";
import "./index.css"
function ProfilePic(props) {
  return <div className="pp"><img id="pp-img" src={props.src} alt="profile"/></div>;
}

export default ProfilePic;
