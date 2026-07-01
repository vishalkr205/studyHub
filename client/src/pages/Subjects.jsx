import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Subjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        try {
            const res = await api.get("/subjects");
            setSubjects(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Subjects</h1>

            {subjects.map((subject) => (
                <div key={subject._id}>
                    <Link to={`/subjects/${subject._id}/chapters`}>
                        {subject.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Subjects;