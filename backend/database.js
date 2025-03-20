import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";

//1- Conecto la base de datos

mongoose.connect(config.db.URI);

//------------------- Comprobar que todo funciona -------------------

//2- Creo una constante que es igual a la conexion
const connection = mongoose.connection;

//veo si funciona
connection.once("open", () => {
    console.log("DB is connected");
});

//veo si se desconecto
connection.on("disconnected", () =>{
    console.log("DB is disconnected");
});

//veo si hay error
connection.on("error", (error) => {
    console.log("error found" + error);
});
