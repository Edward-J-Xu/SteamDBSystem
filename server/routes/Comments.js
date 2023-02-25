const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const db = require("../models/index");
const { validateToken } = require("../middlewares/AuthMiddleware");

// Select
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    // const comments = await Comments.findAll({ where: { PostId: postId } });
    const comments = await db.pool.query(
        "select comment_body as commentBody, post_id as postID from comments where post_id = (?)",
        [postId]
    );
    console.log("comments: ", comments[0]);
    res.json(comments[0]);
});

// Insert
router.post("/", validateToken, async (req, res) => {
    console.log("req.body: ", req.body);
    // console.log("res.json: ", JSON.stringify(req.body))
    const comment = req.body;
    console.log("comment: ", comment.commentBody);
    console.log("postId: ", comment.postId);
    // // await Comments.create(comment);
    const username = req.user.username;
    comment.username = username
    console.log("User: ", username);
    db.pool.query(
        "insert into comments (comment_body, post_id, username) values (?, ?, ?)",
        [comment.commentBody, comment.postId, comment.username]
    );
    res.json(comment);
});

module.exports = router;
