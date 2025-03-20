//Importo la .inreria que acabo de insgtalar
import dotenv from "dotenv";

//Ejecuto "Dotenv"
//me ayudara acceder al .env
dotenv.config();

export const config ={
    db: {
        URI: process.env.DB_URI
    },
    server:{
        port: process.env.PORT || 4000,
    },
};