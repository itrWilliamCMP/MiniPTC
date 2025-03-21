import { Schema, model } from "mongoose";

const MarkSchema = new Schema({

    Mark: {
        type: String,
        required: true  
    }
    
}, {timestamps: true, strict: false});

export default model("Mark", MarkSchema);