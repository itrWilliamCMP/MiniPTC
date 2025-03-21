import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
        default: 0
    },
    Stock: {
        type: Number,
        required: true,
        default: 0
    },
    Year: {
        type: Number
    },
    Description: {
        type: String
    },
    Mark_id: {
        type: Schema.Types.ObjectId,
        ref: 'Mark'
    },
    Model_id: {
        type: Schema.Types.ObjectId,
        ref: 'Model'
    },
    Suppliers_id: {
        type: Schema.Types.ObjectId,
        ref: 'suppliers'
    }
}, { 
    timestamps: true, 
    strict: false 
});

export default model("Products", productsSchema);
