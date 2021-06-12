import { useState, useEffect } from "react"
import axios from "axios"

// Spotify Accounts Service now uses the redirect_uri to return to the application, 
//passing back the authorization_code which is subsequently exchanged in a second call for an access_token.

//the Authorization code flow meanss the user grants permission only once
//You'll get back an access token that can be refreshed (refresh token). 
//The refresh token extends the validity of the access token
export default function useAuth(code) {

  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  //Post code to the route dealing with the login request and it will call our code from the server
  useEffect(() => {
    axios
      .post("/spotify/login", {
        code,
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, "/spotify-home") //removes the code param from our URL
      })
      .catch((err) => {
        console.log(err)
      })
  }, [code])

  //Handles the time interval it takes to refresh
  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("/spotify/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/spotify-home"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}