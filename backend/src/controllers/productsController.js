const productsController = {};
import Products from "../models/Products.js";

// Obtener productos
productsController.getProducts = async (req, res) => {
    const products = await Products.find();
    res.json(products);
};

// Insertar producto
productsController.createProducts = async (req, res) => {
    const { name, descripcion, price, stock } = req.body;
    const newProduct = new Products({ name, descripcion, price, stock });
    await newProduct.save();
    res.json({ message: "Product saved" });
};

// Eliminar producto
productsController.deleteProducts = async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
};

// Actualizar producto
productsController.updateProducts = async (req, res) => {
    const { name, descripcion, price, stock } = req.body;
    await Products.findByIdAndUpdate(req.params.id, { name, descripcion, price, stock }, { new: true });
    res.json({ message: "Product updated" });
};

export default productsController;
