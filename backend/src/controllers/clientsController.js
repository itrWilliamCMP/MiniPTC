const clientsController = {};
import clientsModel from "../models/Clients.js";

clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients);
};

clientsController.createClient = async (req, res) => {
    const { Name, Age, PhoneNumber, Email, Address, Dui } = req.body;
    const newClient = new clientsModel({ Name, Age, PhoneNumber, Email, Address, Dui });
    await newClient.save();
    res.json({ message: "Client saved" });
};

clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
};

clientsController.updateClient = async (req, res) => {
    const { Name, Age, PhoneNumber, Email, Address, Dui } = req.body;
    await clientsModel.findByIdAndUpdate(req.params.id, { Name, Age, PhoneNumber, Email, Address, Dui }, { new: true });
    res.json({ message: "Client updated" });
};

export default clientsController;