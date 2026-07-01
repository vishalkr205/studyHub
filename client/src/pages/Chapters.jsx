import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function Chapters(){
    const {id} = useParams();
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        fetchChapters();
    },[]);

    const fetchChapters = async() => {
        try{
            const res = await api.get(`/subjects/${id}/chapters`);
            setChapters(res.data);
        }catch(error){
            console.log(error);
        }
    };
    return (
        <div>
            <h1>Chapters</h1>

            {chapters.map((chapter) =>(
                <div key = {chapter._id}>
                    <h3>{chapter.name}</h3>
                    <Link to={`/chapters/${chapter._id}/notes`} >
                        <button> View Notes </button>
                    </Link>

                    {" "}

                    <Link to={`/practice/${chapter._id}`} >
                        <button> Practice </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Chapters;