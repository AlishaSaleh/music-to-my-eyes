const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();


//const passport = require("passport");
//const users = require("./routes/api/users");

// Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);

app.use(session({
    secret: 'teapot',
    cookie: { maxAge: 360000 },
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: 'mongodb://localhost:27017/mtme', 
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native' 
    })
  }));
  
// Routes
//app.use("/api/users", users);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/mtme",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});