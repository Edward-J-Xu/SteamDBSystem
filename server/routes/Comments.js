const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const db = require("../models/index")

// Select
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  // const comments = await Comments.findAll({ where: { PostId: postId } });
  const comments = await db.pool.query(
      "select * from comments where post_id = (?)",
      [postId]
  )
  res.json(comments[0]);
});

// Insert
router.post("/", async (req, res) => {
  const {comment, postId} = req.body;
  // await Comments.create(comment);
  db.pool.query(
      "insert into comments (comment_body, post_id) values (?, ?)",
      [comment, postId]
  )
  res.json(comment);
});

module.exports = router;
