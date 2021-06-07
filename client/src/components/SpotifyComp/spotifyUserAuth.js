import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
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
    
}