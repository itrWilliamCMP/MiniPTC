import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Dui: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
       
    },
    emailEmployees: {
        type: String,
     //   required: true
    },
    Adress: {
        type: String,
        required: true
    },
    EntryDate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true, strict: false });

export default model("Employees", employeeSchema);
