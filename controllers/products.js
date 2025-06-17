const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        reviews: true,
      },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllProducts };
