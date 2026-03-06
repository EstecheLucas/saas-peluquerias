import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SelectService from "./pages/booking/SelectService";
import SelectProfessional from "./pages/booking/SelectProfessional";
import SelectDateTime from "./pages/booking/SelectDateTime";
import ConfirmBooking from "./pages/booking/ConfirmBooking";
import Dashboard from "./pages/admin/Dashboard";
import BarberPoleLoader from "./components/BarberPoleLoader";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simula el tiempo de carga de fuentes y backend
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // 500ms es el tiempo que toma el fade out
    }, 2000); // 2 segundos de carga mostrada
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <BarberPoleLoader fadeOut={fadeOut} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Services />} />
            <Route path="booking" element={<SelectService />} />
            <Route path="booking/service" element={<SelectService />} />
            <Route path="booking/professional" element={<SelectProfessional />} />
            <Route path="booking/datetime" element={<SelectDateTime />} />
            <Route path="booking/confirm" element={<ConfirmBooking />} />
            <Route path="panel" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
