const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const db = require("../models/index");
const { validateToken } = require("../middlewares/AuthMiddleware");

// Select
router.get("/", validateToken, async (req, res) => {
    // const listOfPosts = await Posts.findAll();
    const [listOfPosts, filedData] = await db.pool.query(
        "select p.*, json_arrayagg(json_object('post_id', l.post_id, 'user_id', l.user_id)) Likes, " + 
        "(select u.id from userA as u where u.username = p.username) as UserId, count(l.post_id) as likeCount " +
        "from post as p left join likes as l on p.id = l.post_id " + 
        "group by p.id " +
        "ORDER BY p.id DESC",
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
    const post = await db.pool.query("select * from post where id = (?)", [
        id,
    ]);
    console.log("viewing a post: ", JSON.stringify(post[0]));
    res.json(post[0][0]);
});

router.get("/byuserId/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await db.pool.query(
        "select p.*, count(l.post_id) as likeCount " + 
        "from post as p left join likes as l " + 
        "on p.id = l.post_id " + 
        "where p.username in (select u.username from userA as u where u.id = (?)) group by p.id " +
        "ORDER BY p.id DESC",
        [id]
    );
    console.log("User's Posts: ", JSON.stringify(listOfPosts[0]));
    const userInfo = await db.pool.query(
        "select userA.*, count(*) as post_count " + 
        "from userA join post on userA.username = post.username " + 
        "where userA.id = (?) " + 
        "group by userA.username ",
        [id]
    );
    console.log("User's Info: ", JSON.stringify(userInfo[0]));
    res.json({listOfPosts: listOfPosts[0], userInfo: userInfo[0]});
});

router.get("/bygameId/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await db.pool.query(
        "SELECT p.*, COUNT(l.post_id) as like_count " + 
        "FROM post p " + 
        "INNER JOIN game g ON p.gid = g.game_id " + 
        "LEFT JOIN likes l ON p.id = l.post_id " + 
        "WHERE g.game_id = (?) " +
        "GROUP BY p.id",
        [id]
    );
    console.log("Game's Posts: ", JSON.stringify(listOfPosts[0]));
    res.json({listOfPosts: listOfPosts[0]});
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username;
    const parsedGid = parseInt(post.gameId);
    // Create / Insert Posts
    console.log("creating a post:", post);
    // await Posts.create(post);
    try {
        await db.pool.query(
            "insert into post (title, postText, username, gid) values (?, ?, ?, ?)",
            [post.title, post.postText, post.username, parsedGid]
        );
    } catch (e) {
        console.log(e);
    }

    res.json(post);
});

router.delete("/:postId", validateToken, async (req, res) => {
    const postId = req.params.postId;
    try {
        await db.pool.query("delete from post where id = (?)", [postId]);
        res.json("DELETED SUCCESSFULLY");
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
