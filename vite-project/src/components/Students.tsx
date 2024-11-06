import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Students(){
    const navigate = useNavigate();

    const HistoryClick = () => {
        navigate("/home/history");
    };

    const DashboardClick = () => {
        navigate("/home/dashboard");
    };

    const DeviceClick = () => {
        navigate("/home/devices");
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
                    <a className="nav-buttons">Students</a>
                </div>
                <h2 className="attendance_dashboard_h2">Students</h2>

                <p>
                    <a className="back-link">Add a Student</a>
                    <a className="back-link">Add from a file</a>
                </p>
                <table className="table1">
                    <thead>
                        <tr>
                            <th>Card UID</th>
                            <th>Student ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={6}>No Students</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}


export default Students