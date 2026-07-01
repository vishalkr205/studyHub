import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Notes() {
    const { id } = useParams();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
        const res = await api.get(`/chapters/${id}/notes`);
        setNotes(res.data);
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div>
        <h1>Notes</h1>

        {notes.length === 0 ? (
            <p>No Notes Available</p>
        ) : (
            notes.map((note) => (
            <div key={note._id}>
                <h3>{note.title}</h3>
                <a
                href={note.fileUrl}
                target="_blank"
                rel="noreferrer"
                >
                View PDF
                </a>
            </div>
            ))
        )}
        </div>
    );
}

export default Notes;