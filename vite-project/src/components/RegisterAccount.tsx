import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RegisterAccount(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        if (username && password && email && confirm_password) {
            try {
                const response = await fetch('http://localhost:5000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password , confirm_password}),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    navigate("/");
                } else {
                    alert(data.message || "Register failed");
                }
            } catch (error) {
                console.error("Error registering:", error);
                alert("An error occurred. Please try again.");
            }
        } else {
            alert("Please enter valid fields");
        }
    };

    return (
        <>
        <div className="wrapper">
            <Header></Header>
            

            <div className="container">
                <img className="logo" src="./essu_logo.png" />
                <h1 className="h11">Create account</h1>

                <form className="form1" onSubmit={handleSubmit}>

                    <input type="text" id="username" name="username" required className="input-field" placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                     />
                    <br/>

                    <input type="email" id="email" name="email" required className="input-field" placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>

                    <input type="password" id="password" name="password" required className="input-field" placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>

                    <input type="password" id="password2" name="password2" required className="input-field" placeholder="Confirm Password"
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br/>

                    <button type="submit" className="login-btn">Create Account</button>

                </form>
            </div>

            <Footer></Footer>
        </div>
        </>
    );
}

export default RegisterAccount