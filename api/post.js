const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const { title, published, authorId } = req.body;
  const newPost = await prisma.post.create({
    data: {
      title,
      published,
      author: {
        connect: { id: parseInt(authorId) },
      },
    },
  });
  res.json(newPost);ß
});

module.exports = router;
