//Importo la .inreria que acabo de insgtalar
import dotenv from "dotenv";

//Ejecuto "Dotenv"
//me ayudara acceder al .env
dotenv.config();

export const config ={
    db: {
        URI: process.env.DB_URI,
    },
    server:{
        port: process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRE,
    },
    ADMIN: {
        secret: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    email: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
};