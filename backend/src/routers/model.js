import express from "express";
import modellController from "../controllers/modellController.js";

// Crear el router para manejar las rutas relacionadas con los modelos
const router = express.Router();

// Ruta principal: obtener todos los modelos o crear uno nuevo
router.route("/")
    .get(modellController.getModell)          // Obtener todos los modelos
    .post(modellController.createModell);     // Crear un nuevo modelo

// Ruta con ID: actualizar o eliminar un modelo específico
router.route("/:id")
    .put(modellController.updateModell)       // Actualizar modelo por ID
    .delete(modellController.deleteModell);   // Eliminar modelo por ID

// Exportación del router para usarlo en la app principal
export default router;
