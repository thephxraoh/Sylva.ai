// ...existing code...
import React, { useState, useEffect } from "react";

export default function Home() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => setMessage("Error connecting to backend"));
    }, []);

    return ( <
        div >
        <
        h1 > AI Learning Assistant < /h1> <
        p > Backend says: { message } < /p> < /
        div >
    );
}
// ...existing code...