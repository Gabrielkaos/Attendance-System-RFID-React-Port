import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

function History(){
    const navigate = useNavigate();
    const [date_selected, setDate] = useState("");


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (date_selected) {
            navigate(`/home/history/date_attendance?date=${date_selected}`);
        } else {
            alert("Please select a date");
        }
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
                    <a className="nav-buttons">History</a>
                    <a className="nav-buttons" onClick={DashboardClick}>Attendances</a>
                    <a className="nav-buttons" onClick={DeviceClick}>Devices</a>
                    <a className="nav-buttons" onClick={StudentClick}>Students</a>
                </div>
                <h2 className="attendance_dashboard_h2">Attendance History</h2>

                    <form onSubmit={handleSubmit}>
                        <label className="form_label1">Select Date</label>
                        <br />
                        <input className="form_input1" type="date" id="date" name="date" 
                        value={date_selected}
                        onChange={(e) => setDate(e.target.value)}
                        />
                        <button className="form_button1" type="submit">Go to Date</button>
                    </form>

                    <h4 className="all_logs_h4">All logs:</h4>
                    <table className="table1">
                        <thead>
                            <tr>
                                <th>Event/Subject</th>
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


export default History