import React from 'react'
import {Container, Form} from 'react-bootstrap'
import spotifyUserAuth from "./spotifyUserAuth"

export default function SpotifyDashboard ({code}) {
    const accessToken = spotifyUserAuth(code)
    return (
        <div>{code}</div>
    )
}