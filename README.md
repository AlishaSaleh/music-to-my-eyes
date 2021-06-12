# Music To My Eyes
Music To My Eyes is a full stack MERN dating app that allows singletons with a passion for music to find potential partners with a similar music tastes!

## Linked To Deployed 
Please click [here](https://music-to-my-eyes.herokuapp.com/)

## Screenshots

![image](https://user-images.githubusercontent.com/74797740/121778721-18fe9a00-cb90-11eb-9a38-134cd289cbb5.png)
![image](https://user-images.githubusercontent.com/74797740/121778763-4ea38300-cb90-11eb-8f06-2f022a7528b3.png)
![image](https://user-images.githubusercontent.com/74797740/121778789-785caa00-cb90-11eb-8841-7f420f0eb44d.png)
![image](https://user-images.githubusercontent.com/74797740/121778845-bf4a9f80-cb90-11eb-96c0-fa0ddefccb03.png)

## Technologies
* MongoDB/Moongose
* React
* React Router
* Tailwind CSS
* Bootstrap
* Bcrypt / Validator
* Spotify API
* React-Tinder-Cards
* JSX
* Express
* Node.js
* Cloudinary
* Deployed to Heroku


## Installation
To install the app on your local computer, you will need to fork this repo.

Once the repo is cloned, you will need to run npm install in your command line/terminal in order to install all the dependencies to run the application successfully. Once all the dependencies are installed, you will need to run npm run start to initialise the app. A new tab will open in your browser automatically to render the app.

*Spotify Credentials Instructions*

To get Spotify Credentials to run the app, register with the [Spotify Developer](https://developer.spotify.com/) page to get a Client ID, Client Secret and to set your redirect uri link.

You will need to ensure you save these credentials on .env files (one in the root and client) in order for the application to run successfully.

Root .env requires the following:
```CLIENT_ID="your_spotify_client_id"
REDIRECT_URL="specify_your_redirect_uri" e.g. "https://localhost:3000/spotify
CLIENT_SECRET="your_spotify_client_secret"
JWT_SECRET=""
```
Client .env requires the following:
```REACT_APP_CLIENT_ID="your_spotify_client_id"
REACT_APP_AUTHORIZE_URL=https://accounts.spotify.com/authorize
REACT_APP_REDIRECT_URL="specify_your_redirect_uri
REACT_APP_CLIENT_SECRET="your_spotigy_client_secret"
```

## Test
We do not have any test packages for this app but always check the error messages within terminals and debug using console.log(s). 

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)

## Contributors

 - [Alisha Saleh](https://github.com/AlishaSaleh)
 - [Karen Opoku](https://github.com/Karen-O94)
 - [Kate Madden](https://github.com/kvtemadden)
 - [Livvy Owen](https://github.com/oliviaowen1)
 - [Zarim Salim](https://github.com/zs274)

 