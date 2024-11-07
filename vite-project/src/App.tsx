import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Devices from "./components/Devices";
import Students from "./components/Students";
import Home from "./components/Home";
import RegisterAccount from "./components/RegisterAccount";
import DateAttendance from "./components/DateAttendance";
import Addevent from "./components/AddEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<RegisterAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/dashboard" element={<Dashboard />} />
        <Route path="/home/dashboard/add_event" element={<Addevent />} />
        <Route path="/home/history" element={<History />} />
        <Route path="/home/history/date_attendance" element={<DateAttendance />} />
        <Route path="/home/devices" element={<Devices />} />
        <Route path="/home/students" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
