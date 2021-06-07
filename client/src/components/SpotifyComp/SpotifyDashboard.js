import { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import spotifyUserAuth from "./spotifyUserAuth"
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

export default function SpotifyDashboard({ code }) {
    const accessToken = spotifyUserAuth(code);
    const [songSearch, setSongSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    return (
        <Container>
            <Form.Control 
            type="search" 
            placeholder="Search Songs or Artists" 
            value={songSearch} 
            onChange={e => setSongSearch(e.target.value)} 
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }} >
                Songs
            </div>
        </Container>
    )
}