const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const authors = await prisma.author.findMany();
  res.json(authors);
});

router.post("/", async (req, res) => {
  const { name, email, authorId } = req.body;
  const newAuthor = await prisma.author.create({
    data: {
      name,
      email,
    },
  });
  res.json(newAuthor);
});

module.exports = router;
