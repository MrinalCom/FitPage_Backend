const express = require("express");
const { createReview, getReviewsByProduct } = require("../controllers/reviews");
const router = express.Router();

const { getReviewTags } = require("../controllers/reviews");
router.get("/tags/:productId", getReviewTags);

router.post("/", createReview);
router.get("/:productId", getReviewsByProduct);

module.exports = router;
