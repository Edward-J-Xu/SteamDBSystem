const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const db = require("../models/index");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        // Users.create({
        //     username: username,
        //     password: hash,
        // });
        console.log("hash: ", hash);
        db.pool.query("insert into users (username, password) values (?, ?)", [
            username,
            hash,
        ]);
        res.json("SUCCESS");
    });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Find if exists in table
    // const user = await Users.findOne({ where: { username: username } });
    const [user, fieldData] = await db.pool.query(
        "select * from users where username = (?)",
        [username]
    );
    console.log("username: ", user[0]);

    if (!user || !user[0]) {
        res.json({ error: "User Doesn't Exist" });
        return;
    }

    bcrypt.compare(password, user[0].password).then((match) => {
        if (!match) {
            console.log("not matched");
            res.json({ error: "Wrong Username And Password Combination" });
            return;
        }

        console.log("matched");
        const accessToken = sign(
            { username: user[0].username, id: user[0].id },
            "importantsecret"
        );
        res.json(accessToken);
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;
