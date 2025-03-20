import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true
    },
    Dui: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true, strict: false });

export default model("Clients", clientSchema);
