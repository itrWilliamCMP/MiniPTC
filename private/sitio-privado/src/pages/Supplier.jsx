import React, { useEffect, useState } from "react";
import RegisterSupplier from "../components/Suppliers/RegisterSupplier";
import ListSupplier from "../components/Suppliers/ListSupplier";
import toast, { Toaster } from "react-hot-toast";
import "../StylePrivadoo/Supplier.css";

const Suppliers = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/suppliers";
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuppliers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setSuppliers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const saveSupplier = async (e) => {
    e.preventDefault();
    const newSupplier = { nombre, correo, telefono, direccion };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSupplier),
    });

    if (!res.ok) {
      toast.error("Error al registrar proveedor");
      return;
    }

    toast.success("Proveedor registrado");
    resetForm();
    fetchSuppliers();
  };

  const deleteSupplier = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    toast.success("Proveedor eliminado");
    fetchSuppliers();
  };

  const updateSupplier = (data) => {
    setId(data._id);
    setNombre(data.nombre);
    setCorreo(data.correo);
    setTelefono(data.telefono);
    setDireccion(data.direccion);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedSupplier = { nombre, correo, telefono, direccion };

    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSupplier),
    });

    if (!res.ok) {
      toast.error("Error al actualizar proveedor");
      return;
    }

    toast.success("Proveedor actualizado");
    resetForm();
    setActiveTab("list");
    fetchSuppliers();
  };

  const resetForm = () => {
    setId("");
    setNombre("");
    setCorreo("");
    setTelefono("");
    setDireccion("");
  };

  return (
    <div className="suppliers-root">
      <div className="suppliers-container">
        <h1 className="suppliers-title">Gestión de Proveedores</h1>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("list")}>Listado</button>
          <button onClick={() => setActiveTab("form")}>Agregar / Editar</button>
        </div>
        {activeTab === "list" && (
          <ListSupplier
            suppliers={suppliers}
            loading={loading}
            deleteSupplier={deleteSupplier}
            updateSupplier={updateSupplier}
          />
        )}
        {activeTab === "form" && (
          <RegisterSupplier
            nombre={nombre}
            correo={correo}
            telefono={telefono}
            direccion={direccion}
            setNombre={setNombre}
            setCorreo={setCorreo}
            setTelefono={setTelefono}
            setDireccion={setDireccion}
            saveSupplier={saveSupplier}
            handleEdit={handleEdit}
            id={id}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Suppliers;
