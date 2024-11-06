import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        if (username && password) {
            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    navigate("/home/dashboard");
                } else {
                    alert(data.message || "Login failed");
                }
            } catch (error) {
                console.error("Error logging in:", error);
                alert("An error occurred. Please try again.");
            }
        } else {
            alert("Please enter valid username and password");
        }
    };

    const handleRegister = () => {
        navigate("/signup");
    }

    return (
        <>
        <div className="wrapper">
            <Header></Header>
            

            <div className="container">
                <img className="logo" src="./essu_logo.png" />
                <h1 className="h11">Login</h1>

                <form className="form1" onSubmit={handleSubmit}>

                    <input type="text" id="username" name="username" required className="input-field" placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                     />
                    <br/>
                    <input type="password" id="password" name="password" required className="input-field" placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>

                    <button type="submit" className="login-btn">LOGIN</button>

                </form>
                <i><a onClick={handleRegister}>Create an account</a></i>
            </div>

            <Footer></Footer>
        </div>
        </>
    );
}

export default Login