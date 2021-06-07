import React from 'react'
import {Container, Form} from 'react-bootstrap'
import spotifyUserAuth from "./spotifyUserAuth"

export default function SpotifyDashboard ({code}) {
    const accessToken = spotifyUserAuth(code)
    return (
        <Container>
            <Form.Control type="search" placeholder="Search Songs or Artists" value={search} onChange={e => setSearch(e.target.value)} />
        </Container>
    )
}