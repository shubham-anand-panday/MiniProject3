import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InitialCheck.css"

export default function InitialCheck({setIsAuthenticated}){

    const [password, setPassword] = useState("");
    const correctPassword = "shubhamloveslaado";
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password === correctPassword){
            const expiry = Date.now() + 60 * 60 * 1000;
            localStorage.setItem("auth", JSON.stringify({expiry}))
            setIsAuthenticated(true);
            navigate("/first");
        }else{
            alert("Wrong password!");
            setPassword("");
        }
    }

    return(
        <div className="main-bg">
            <h1 className="input-heading">Enter the Password to Proceed</h1>
            <form onSubmit={handleSubmit} className="password-form">
                <input 
                type="password" 
                value={password}
                placeholder="Type your password..." 
                className="password-input"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}