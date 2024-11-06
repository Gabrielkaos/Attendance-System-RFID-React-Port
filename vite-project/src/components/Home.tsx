import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Home(){
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
            </div>
            <Footer />
        </div>
        
        </>
        
    );
}


export default Home