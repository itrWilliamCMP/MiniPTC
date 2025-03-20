const employeesController = {};
import employeesModel from "../models/Employees.js";

// Select (GET)
employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);
};

// Insert (POST)
employeesController.createEmployee = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const newEmployee = new employeesModel({ name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified });
    await newEmployee.save();
    res.json({ message: "Employee saved" });
};

// Delete (DELETE)
employeesController.deleteEmployee = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
};

// Update (PUT)
employeesController.updateEmployee = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    await employeesModel.findByIdAndUpdate(req.params.id, { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified }, { new: true });
    res.json({ message: "Employee updated" });
};

export default employeesController;
