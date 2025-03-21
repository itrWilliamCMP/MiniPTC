import express from "express";
import modellController from "../controllers/modellController.js";

const router = express.Router();

router.route("/")
    .get(modellController.getModell)
    .post(modellController.createModell);

router.route("/:id")
    .put(modellController.updateModell)
    .delete(modellController.deleteModell);

export default router;