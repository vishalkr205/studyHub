import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
        const token = localStorage.getItem("token");

        const res = await api.get("/auth/profile", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        setUser(res.data);
        } catch (error) {
        console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    if (!user) return <h2>Loading...</h2>;

    return (
        <div>
        <h1>Profile</h1>

        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Role: {user.role}</h3>

        <br />

        <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Profile;