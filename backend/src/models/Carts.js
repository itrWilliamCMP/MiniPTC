import { Schema, model } from "mongoose";

const cartsSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    Products_id: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    Clients_id: {
        type: Schema.Types.ObjectId,
        ref: 'Clients'
    }
}, { 
    timestamps: true, 
    strict: false 
});

export default model("Carts", cartsSchema);
