const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);
const gamesRouter = require("./routes/Games");
app.use("/games", gamesRouter);


app.use((error, req, res, next) => {
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occerred!'})

})

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})

// db.sequelize.sync().then(() => {
//   app.listen(3001, () => {
//     console.log("Server running on port 3001");
//   });
// });
