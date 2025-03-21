const modellController = {};
import modellModel from "../models/Model.js";

modellController.getModell = async (req, res) => {
    const modell = await modellModel.find();
    res.json(modell);
};

// Insert (POST)
modellController.createModell = async (req, res) => {
    const { Modell } = req.body;
    const newModell = new modellModel({ Modell });
    await newModell.save();
    res.json({ message: "Model saved" });
};

// Delete (DELETE)
modellController.deleteModell = async (req, res) => {
    await modellModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Model deleted" });
};

// Update (PUT)
modellController.updateModell = async (req, res) => {
    const { Modell } = req.body;
    await modellModel.findByIdAndUpdate(req.params.id, { Modell }, { new: true });
    res.json({ message: "Model updated" });
};

export default modellController;