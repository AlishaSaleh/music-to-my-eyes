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
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!songSearch) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(songSearch).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        },
                        track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        });
        return () => (cancel = true)
    }, [songSearch, accessToken])
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