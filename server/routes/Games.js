const express = require("express");
const router = express.Router();
const db = require("../models/index");


router.get("/", async (req, res) => {
    const [data, metaData] = await db.pool.query(
        "select * from game"
    )
    console.log("call get game api: ", data[0])
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
