import React from 'react'
import {Container }from 'react-bootstrap'

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL //The redirect URL
  } = process.env;

//Spotify authorization URL to allow user permission
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
console.log(AUTH_URL)

export default function SpotifyLogin() {
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                    Login With Spotify
      </a>
            </Container>
        </div>
    )
}