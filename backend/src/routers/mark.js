import express from "express";
import markController from "../controllers/markController.js";

const router = express.Router();

router.route("/")
    .get(markController.getMark)
    .post(markController.createMark);

router.route("/:id")
    .put(markController.updateMark)
    .delete(markController.deleteMark);

export default router;