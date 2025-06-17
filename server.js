const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const reviewRoutes = require("./routes/reviews");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Ratings and Reviews API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
