import {useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";
import {AuthContext} from "../context/AuthContext";

function Login(){
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);
    
    const handleLogin = async () => {
        try{
            const response = await api.post("/auth/login",{ email, password,});
            localStorage.setItem("token",response.data.token);
            setUser(response.data.user);

            alert("Login successful!");
            navigate("dashboard");
        }catch(error){
            alert(error.response?.data?.message || "login Failed");
        }
    };
    return(
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
            <Link to ="./Register.jsx">
                <button>Register</button>
            </Link>
        </div>
    );
}


export default Login;