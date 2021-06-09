const express = require('express');
const router = express.Router();
const SpotifyWebApi = require("spotify-web-api-node");
require('dotenv').config();

router.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    })
  
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  });

  //Login route for spotify authentication
  router.post("/login", (req, res) => {
    console.log('show code 1')
    const code = req.body.code // This is the code that's returned as a query parameter to the redirect URI
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })
    console.log(code)
   console.log(spotifyApi)
    //This retrieves the access and refresh token
    spotifyApi
      .authorizationCodeGrant(code) //checks that we have an authorised code and then gives access to tokens
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  })

module.exports = router; 