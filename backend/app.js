// Importo Express y las rutas
import express from "express";
import productsRouters from "./src/routers/products.js";
import clientsRouters from "./src/routers/clients.js";
import employeesRouters from "./src/routers/employees.js";
import reviewRouters from "./src/routers/reviews.js";
import markRouter from "./src/routers/mark.js";

// Creo una constante que es igual a la librería que importé
const app = express();

// Permitir que acepte datos en formato JSON
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRouters);
app.use("/api/clients", clientsRouters)
app.use("/api/employees", employeesRouters);
app.use("/api/reviews", reviewRouters);
app.use("/api/mark", markRouter);

// Exporto la constante para poder usar Express en otros archivos
export default app;


