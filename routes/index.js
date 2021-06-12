const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const spotifyRoutes = require("./spotify")

router.use("/api", apiRoutes);
router.use("/user", userRoutes);
router.use("/spotify", spotifyRoutes);

// builds the react app if there are no API routes to hit
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;