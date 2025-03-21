import express from  "express";
import cartsController from "../controllers/cartsController.js";
//Router() nos ayuda a colocar los metodo
//Que 
const router = express.Router();

router.route("/")
.get(cartsController.getCarts)
.post(cartsController.createCarts);

router.route("/:id")
.put(cartsController.updateCarts)
.delete(cartsController.deleteCarts);

export default router;