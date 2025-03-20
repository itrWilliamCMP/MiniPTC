import express from  "express";
import productsController from "../controllers/productsController.js";
//Router() nos ayuda a colocar los metodo
//Que 
const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.createProducts);

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;