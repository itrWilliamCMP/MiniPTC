const clientsController = {};
import clientsModel from "../models/Clients.js";

// Select (GET)
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients);
};

// Insert (POST)
clientsController.createClient = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const newClient = new clientsModel({ name, lastName, birthday, email, password, telephone, dui, isVerified });
    await newClient.save();
    res.json({ message: "Client saved" });
};

// Delete (DELETE)
clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
};

// Update (PUT)
clientsController.updateClient = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    await clientsModel.findByIdAndUpdate(req.params.id, { name, lastName, birthday, email, password, telephone, dui, isVerified }, { new: true });
    res.json({ message: "Client updated" });
};

export default clientsController;
