import { Schema, model } from "mongoose";

const suppliersSchema = new Schema({

    Name: {
        type: String,
        required: true  
    },
    Country: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: true
    },
    EmailSuppliers: {
        type: String,
        require: true
    }
    
}, {timestamps: true, strict: false});

export default model("suppliers", suppliersSchema);