const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// Select
router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

// Select
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  // Create / Insert Posts
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
