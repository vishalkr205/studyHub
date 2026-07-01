import{useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";


function Register(){
    const [name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        try{
            await api.post("/auth/register",{name,email,password,});
            alert("Registration Successful");
            navigate("/dashboard");
        }catch(error){
        alert(error.response?.data?.message || "Registration Failed");
        }
    };
    return(
        <>
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
            <br /><br />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleRegister}>Register</button>
        </div>
        </>
        
    );
}

export default Register;