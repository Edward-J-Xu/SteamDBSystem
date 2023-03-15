const express = require("express");
const router = express.Router();
const db = require("../models/index");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
    const { PostId } = req.body;
    const UserId = req.user.id;

    //   const found = await Likes.findOne({
    //     where: { PostId: PostId, UserId: UserId },
    //   });
    const found = await db.pool.query(
        "select * from likes where post_id = (?) and user_id =(?) ",
        [PostId, UserId]
    );
    if (found[0].length == 0) {
        // await Likes.create({ PostId: PostId, UserId: UserId });
        await db.pool.query(
            "insert into likes (post_id, user_id) values (?, ?)",
            [PostId, UserId]
        );
        res.json({ liked: true });
    } else {
        await db.pool.query(
            "delete from likes where post_id =  (?) and user_id = (?)",
            [PostId, UserId]
        );
        // await Likes.destroy({
        //   where: { PostId: PostId, UserId: UserId },
        // });
        res.json({ liked: false });
    }
});


module.exports = router;
