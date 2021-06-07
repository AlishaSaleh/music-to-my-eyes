import { useState, useEffect } from "react"
import axios from "axios"

export default function spotifyUserAuth(code) {
    useEffect(() => {
        axios
          .post("http://localhost:3001/spotify/login", {
            code,
          })
          .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/spotify")
          })
          .catch(() => {
            window.location = "/spotify"
          })
      }, [code])

      useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
          axios
            .post("http://localhost:3001/refresh", {
              refreshToken,
            })
            .then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
              window.location = "/spotify"
            })
        }, (expiresIn - 60) * 1000)
    
        return () => clearInterval(interval)
      }, [refreshToken, expiresIn])
    
      return accessToken
}