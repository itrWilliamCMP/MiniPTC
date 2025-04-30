import { Schema, model } from "mongoose";

// Definición del esquema para los modelos (Model)
const ModelSchema = new Schema({
    Modell: {
        type: String,
        required: true // El nombre del modelo es obligatorio
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite guardar campos no definidos en el esquema
});

// Exportación del modelo Model basado en el esquema
export default model("Model", ModelSchema);
