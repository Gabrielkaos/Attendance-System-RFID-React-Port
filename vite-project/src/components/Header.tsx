import { useLocation, useNavigate } from "react-router-dom";


function Header(){
    const location = useLocation();
    const navigate = useNavigate();

    const currentUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;


    const handleLogout = () => {
        navigate("/");
    }

    if (currentUrl=='http://localhost:5173/' || currentUrl=="http://localhost:5173/signup"){
        return (
            <>
            <header>
                    <h3>Attendance System</h3>
            </header>
            </>
        );
    }else{
        return (
            <>
            <header>
                <h3>Attendance System</h3>
                <a onClick={handleLogout}>Logout</a>
            </header>
            </>
        );
    }
}

export default Header