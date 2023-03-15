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
        "select * from comments where post_id = (?)",
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
    console.log("comment: ", comment.comment_body);
    console.log("postId: ", comment.postId);
    // // await Comments.create(comment);
    const username = req.user.username;
    comment.username = username
    console.log("User: ", username);
    db.pool.query(
        "insert into comments (comment_body, post_id, username) values (?, ?, ?)",
        [comment.comment_body, comment.postId, comment.username]
    );
    res.json(comment);
});

router.delete("/:commentId", validateToken, async (req, res) => {
    const commentId = req.params.commentId;
  
    // await Comments.destroy({
    //   where: {
    //     id: commentId,
    //   },
    // });
    console.log("CommentID: ", commentId);
    db.pool.query(
        "delete from comments where id =  (?)",
        [commentId]
    );
  
    res.json("DELETED SUCCESSFULLY");
  });

module.exports = router;
