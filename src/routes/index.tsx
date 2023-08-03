import CadastroCliente from "@/pages/CadastroClientes";
import CategoriaCliente from "@/pages";
import { Routes, Route,  Navigate } from "react-router-dom";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/clientes" element={<CadastroCliente />} />
      <Route path="/categoria" element={<CategoriaCliente />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
