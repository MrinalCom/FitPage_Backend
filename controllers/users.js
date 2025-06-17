const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.trim() === "") {
      return res.status(400).json({ error: "Username is required." });
    }
    const newUser = await prisma.user.create({
      data: { username },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser };
