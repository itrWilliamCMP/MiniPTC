// Importo Express y las rutas
import express from "express";
import productsRouters from "./src/routers/products.js";
import clientsRouters from "./src/routers/clients.js";
import employeesRouters from "./src/routers/employees.js";
import reviewRouters from "./src/routers/reviews.js";
import markRouter from "./src/routers/mark.js";
import modellRouters from "./src/routers/model.js";
import suppliersRouters from "./src/routers/suppliers.js";
import cartsRouter from "./src/routers/carts.js";
import salesRouter from "./src/routers/sales.js";
import registerEmployeesRouter from "./src/routers/registeremployees.js";
import cookieParser from "cookie-parser";
import loginRouters from "./src/routers/login.js";
import logoutRoters from "./src/routers/logout.js";
import registerClientsRouter from "./src/routers/registerClients.js";
import recoveryPasswordRouter from "./src/routers/recoveryPassword.js";

// Creo una constante que es igual a la librería que importé
const app = express();

// Permitir que acepte datos en formato JSON
app.use(express.json());
//Que postman acepte cookies
app.use(cookieParser());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRouters);
app.use("/api/clients", clientsRouters)
app.use("/api/employees", employeesRouters);
app.use("/api/reviews", reviewRouters);
app.use("/api/mark", markRouter);
app.use("/api/modell", modellRouters);
app.use("/api/suppliers", suppliersRouters);
app.use("/api/carts", cartsRouter);
app.use("/api/sales", salesRouter);
app.use("/api/registerEmployees", registerEmployeesRouter);
app.use("/api/login", loginRouters);
app.use("/api/logout", logoutRoters);
app.use("/api/registerClients", registerClientsRouter);
app.use("/api/recoveryPassword", recoveryPasswordRouter);

// Exporto la constante para poder usar Express en otros archivos
export default app;


