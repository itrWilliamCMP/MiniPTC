import express from "express";
import reviewController from "../controllers/reviewController.js";

const router = express.Router();

router.route("/")
    .get(reviewController.getReviews)
    .post(reviewController.createReviews);

router.route("/:id")
    .put(reviewController.updateReviews)
    .delete(reviewController.deleteReviews);

export default router;
