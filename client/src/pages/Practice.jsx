import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Practice() {
    const { chapterId } = useParams();

    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
        const res = await api.get(`/questions/${chapterId}`);
        setQuestions(res.data);
        } catch (err) {
        console.log(err);
        }
    };

    const submitAnswer = async () => {
        try {
        const res = await api.post("/submit", {
            questionId: questions[current]._id,
            selectedAnswer,
        });

        setResult(res.data);
        } catch (err) {
        console.log(err);
        }
    };

    if (questions.length === 0) {
        return <h2>No Questions Available</h2>;
    }

    return (
        <div>
        <h1>Practice</h1>

        <h3>{questions[current].question}</h3>

        {questions[current].options.map((option, index) => (
            <div key={index}>
            <button onClick={() => setSelectedAnswer(index)}>
                {option}
            </button>
            </div>
        ))}

        <br />

        <button onClick={submitAnswer}>
            Submit Answer
        </button>

        {result && (
            <div>
            <h3>{result.isCorrect ? "Correct ✅" : "Wrong ❌"}</h3>
            <p>{result.explanation}</p>
            </div>
        )}
        </div>
    );
}

export default Practice;