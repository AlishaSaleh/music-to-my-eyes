import React from 'react'
import SpotifyDashboard from '../components/SpotifyComp/SpotifyDashboard'
import SpotifyLogin from '../components/SpotifyComp/SpotifyLogin'

const code = new URLSearchParams(window.location.search).get("code")

function SpotifyHome () {
    console.log('redirect')
    return code ? <SpotifyDashboard code={code} /> : <SpotifyLogin />
}

export default SpotifyHome