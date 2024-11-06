import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Devices from "./components/Devices";
import Students from "./components/Students";
import Home from "./components/Home";
import RegisterAccount from "./components/RegisterAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<RegisterAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/dashboard" element={<Dashboard />} />
        <Route path="/home/history" element={<History />} />
        <Route path="/home/devices" element={<Devices />} />
        <Route path="/home/students" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
