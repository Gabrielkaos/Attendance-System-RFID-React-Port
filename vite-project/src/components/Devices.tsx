import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Devices(){
    const navigate = useNavigate();

    const HistoryClick = () => {
        navigate("/home/history");
    };

    const DashboardClick = () => {
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
                    <a className="nav-buttons">Devices</a>
                    <a className="nav-buttons" onClick={StudentClick}>Students</a>
                </div>
                <h2 className="attendance_dashboard_h2">Devices</h2>

                <p>
                    <a href="{% url 'attendance_app:add_device' %}" className="back-link">Add New Device</a>
                </p>

                <table className="table1">
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>No devices</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}


export default Devices