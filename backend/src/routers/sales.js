import express from  "express";
import salesController from "../controllers/salesController.js";
//Router() nos ayuda a colocar los metodo
//Que 
const router = express.Router();

router.route("/")
.get(salesController.getSales)
.post(salesController.createSales);

router.route("/:id")
.put(salesController.updateSales)
.delete(salesController.deleteSales);

export default router;