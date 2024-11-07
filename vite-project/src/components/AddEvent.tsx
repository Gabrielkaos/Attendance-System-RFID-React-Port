import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Addevent(){
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
                <p><a onClick={DashboardClick} className="back-link">Go Back</a></p>
                <div className="container">
                    <h2 className="attendance_dashboard_h2">New Attendance</h2>
                </div>



                <form method="post" action="{% url 'attendance_app:add_event' %}" className="form-container">
                    <label>Device:</label>
                    <input type="text" name="device" id="device" required/>
                    
                    <label>Event/Subject:</label>
                    <input type="text" name="name" id="name" required/>

                    <label>Organizer/Instructor:</label>
                    <input type="text" name="instructor" id="instructor" required/>

                    <button type="submit">Add</button>
                </form>
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}


export default Addevent