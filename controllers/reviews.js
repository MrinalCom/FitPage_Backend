const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReview = async (req, res) => {
  try {
    const { userId, productId, rating, review, photo_url } = req.body;

    if (!userId || !productId || (!rating && !review)) {
      return res.status(400).json({
        error:
          "userId, productId, and at least one of rating or review are required.",
      });
    }

    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ error: "Rating must be between 1 and 5." });
    }

    const existing = await prisma.review.findUnique({
      where: { userId_productId: { userId, productId } },
    });

    if (existing) {
      return res
        .status(400)
        .json({ error: "User has already reviewed this product." });
    }

    const newReview = await prisma.review.create({
      data: {
        rating,
        review,
        photo_url,
        userId,
        productId,
      },
    });

    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await prisma.review.findMany({
      where: { productId: parseInt(productId) },
      include: { user: true },
      orderBy: { created_at: "desc" },
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const stopwords = [
  "the",
  "is",
  "and",
  "a",
  "an",
  "this",
  "that",
  "it",
  "to",
  "was",
  "for",
  "of",
  "with",
  "on",
  "in",
];

const getReviewTags = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await prisma.review.findMany({
      where: { productId: parseInt(productId) },
      select: { review: true },
    });

    const allWords = reviews
      .flatMap((r) => r.review?.toLowerCase().match(/\b\w+\b/g) || [])
      .filter((word) => !stopwords.includes(word));

    const frequency = {};
    allWords.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    const sorted = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5) // Top 5 tags
      .map((entry) => entry[0]);

    res.json({ tags: sorted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createReview, getReviewsByProduct, getReviewTags };
