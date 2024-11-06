import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Dashboard(){

    const navigate = useNavigate();

    const HistoryClick = () => {
        navigate("/home/history");
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
                    <a className="nav-buttons">Attendances</a>
                    <a className="nav-buttons" onClick={DeviceClick}>Devices</a>
                    <a className="nav-buttons" onClick={StudentClick}>Students</a>
                </div>
                <h2 className="attendance_dashboard_h2">Attendances</h2>

                <p>
                    <a className="back-link">Add New Attendance</a>
                </p>

                <table className="table1">
                    <thead>
                        <tr>
                            <th>Event/Subject</th>
                            <th>Organizer/Instructor</th>
                            <th>Associated Device</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4}>No attendance records available.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}


export default Dashboard