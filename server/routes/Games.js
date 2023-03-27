const express = require("express");
const router = express.Router();
const db = require("../models/index");


router.get("/all", async (req, res) => {
    const [data, metaData] = await db.pool.query(
        "select * from game order by name"
    )
    console.log("call get game api: ", data[0])
    res.json(data)
})

router.get("/top_rated", async (req, res) => {
    const [data, metaData] = await db.pool.query(
        "select * from game order by rating desc"
    )
    res.json(data)
})

router.get("/new", async (req, res) => {
    const [data, metaData] = await db.pool.query(
        "select * from game order by release_year desc, release_month desc, release_day desc"
    )
    res.json(data)
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    // const post = await Posts.findByPk(id);
    const [data, metaData] = await db.pool.query(
        "select * from game where game_id = (?)", [
        id,
    ]);
    console.log("getting a game: ", data[0]);
    res.json(data[0]);
});

module.exports = router;
