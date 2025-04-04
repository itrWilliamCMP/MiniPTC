import clientsModel from "../models/Clients.js";
import empleoyeesModel from "../models/Employees.js";

import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import { config } from "../config.js";

const loginController ={};

loginController.login = async(req, res)=>{

    const {emailEmployees, password} = req.body;

    try{
        let userFound;
        let userType;

        if(emailEmployees === config.ADMIN.email && password === config.ADMIN.password){
            userType = "admin";
            userFound = {_id: "admin"};
        }else{
            userFound = await empleoyeesModel.findOne({emailEmployees})
            userType = "empleoyee"
            if(!userFound){
                userFound = await clientsModel.findOne({emailEmployees})
                userType = "Clients"
            }
        }

        if(!userFound){
            return res.json({message: "User not found"});
        }

        if(userType !== "admin"){
            const isMatch = await bcrypt.compare(password, userFound.password)
            if(!isMatch){
                return res.json({message: "Invalid password"})
            }
        }

        jsonwebtoken.sign(
            {id: userFound._id, userType},

            config.JWT.secret,

            {expiresIn: config.JWT.expiresIn},

            (error, token)=> {
                if(error) console.log("error" + error)
                    res.cookie("authCookie", token)
                res.json({message: "Login sucessful"})
            }
        )

    }catch (error){
        console.log("error" + error);

    }
};

export default loginController;
