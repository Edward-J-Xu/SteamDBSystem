const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const db = require("../models/index");
const { validateToken } = require("../middlewares/AuthMiddleware");

// Select
router.get("/", validateToken, async (req, res) => {
    // const listOfPosts = await Posts.findAll();
    const [listOfPosts, filedData] = await db.pool.query(
        "select posts.*, json_arrayagg(json_object('id', l.id, 'username', l.username)) Likes from posts left join likes as l on posts.id = l.post_id group by posts.id"
    );

    const [likedPosts, likedData] = await db.pool.query(
        "select * from likes where user_id = (?)",
        [req.user.id]
    );
    console.log("lists of posts: ", JSON.stringify(listOfPosts));
    console.log("liked posts: ", JSON.stringify(likedPosts));
    // res.json(listOfPosts);
    res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
});

// Select
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    // const post = await Posts.findByPk(id);
    const post = await db.pool.query("select * from posts where id = (?)", [
        id,
    ]);
    console.log("viewing a post: ", JSON.stringify(post[0]));
    res.json(post[0][0]);
});

router.get("/byuserId/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await db.pool.query(
        "select posts.*, json_arrayagg(json_object('id', l.id, 'username', l.username)) Likes from posts left join likes as l on posts.username = l.username group by posts.username"
    );
    res.json(listOfPosts);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username;
    // Create / Insert Posts
    console.log("creating a post:", post);
    // await Posts.create(post);
    try {
        await db.pool.query(
            "insert into posts (title, postText, username) values (?, ?, ?)",
            [post.title, post.postText, post.username]
        );
    } catch (e) {
        console.log(e);
    }

    res.json(post);
});

router.delete("/:postId", validateToken, async (req, res) => {
    const postId = req.params.postId;
    try {
        await db.pool.query("delete from posts where id = (?)", [postId]);
        res.json("DELETED SUCCESSFULLY");
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
