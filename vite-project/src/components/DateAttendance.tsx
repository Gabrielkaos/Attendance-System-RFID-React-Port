import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function DateAttendance(){
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get("date");

    const HistoryClick = () => {
        navigate("/home/history");
    };

    const DashboardClick = () => {
        navigate("/home/dashboard");
    };

    const DeviceClick = () => {
        navigate("/home/devices");
    };

    const StudentClick = () => {
        navigate("/home/students");
    };
    

    return (
        <>
        <div className="wrapper">
            <Header />

            <div className="main-content">
                <div className="div2">
                    <a className="nav-buttons" onClick={HistoryClick}>History</a>
                    <a className="nav-buttons" onClick={DashboardClick}>Attendances</a>
                    <a className="nav-buttons" onClick={DeviceClick}>Devices</a>
                    <a className="nav-buttons" onClick={StudentClick}>Students</a>
                </div>
                <p><a onClick={HistoryClick} className="back-link">Go back</a></p>
                <h2 className="attendance_dashboard_h2">Attendance History</h2>
                <h4 className="all_logs_h4">Date:{date}</h4>


                <table className="table1">
                    <thead>
                        <tr>
                            <th>Subject/Event</th>
                            <th>Student ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Date Attended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={6}>No attendance records available.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}

export default DateAttendance