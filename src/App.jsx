import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Submit from "./pages/Submit";
import View from "./pages/View";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [role, setRole] = useState(null);
  const [grievances, setGrievances] = useState([]);

  return (
    <BrowserRouter>
      <Navbar role={role} setRole={setRole} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard grievances={grievances} setGrievances={setGrievances} />} />
        <Route path="/submit" element={<Submit grievances={grievances} setGrievances={setGrievances} />} />
        <Route path="/view" element={<View grievances={grievances} setGrievances={setGrievances} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;