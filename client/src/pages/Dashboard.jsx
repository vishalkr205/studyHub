import { Link } from "react-router-dom";


function Dashboard(){
    return (
        <>
        <div>
            <h1>NEET Prep Dashboard</h1>
            <br />
            <Link to="/subjects">
            <button>Subjects</button>
            </Link>
            <br /><br />
            <Link to="/profile">
            <button>Profile</button>
            </Link>
            <br /><br />
            <button onClick={()=>{
                localStorage.removeItem("token");
                window.location.href="/";
            }}>Logout</button>
        </div>
        </>
    );
}

export default Dashboard;