import { Schema, model } from "mongoose";

const salesSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    Payment_Method:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    Carts_id: {
        type: Schema.Types.ObjectId,
        ref: 'Carts'
    }
}, { 
    timestamps: true, 
    strict: false 
});

export default model("Sales", salesSchema);