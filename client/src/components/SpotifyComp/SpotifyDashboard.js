import { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from "./spotifyUserAuth"
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

export default function SpotifyDashboard({ code }) {
    const accessToken = useAuth(code);
    const [songSearch, setSongSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
      useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

      });
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