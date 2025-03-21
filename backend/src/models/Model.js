import { Schema, model } from "mongoose";

const ModelSchema = new Schema({

    Modell: {
        type: String,
        required: true  
    }
    
}, {timestamps: true, strict: false});

export default model("Model", ModelSchema);