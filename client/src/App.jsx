import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import AIPlanner from "./pages/AIPlanner";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import CitySearch from "./pages/CitySearch";
import ActivitySearch from "./pages/ActivitySearch";
import Budget from "./pages/Budget";
import PackingChecklist from "./pages/PackingChecklist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="/city" element={<CitySearch />} />
        <Route path="/activity" element={<ActivitySearch />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/packing" element={<PackingChecklist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ai-planner" element={<AIPlanner />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <div className="main">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}