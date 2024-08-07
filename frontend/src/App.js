import React, { useState, useEffect } from "react";
import "./App.css";
 
function App() {
    // usestate for setting a javascript object for storing and using data
    const [data, setdata] = useState({
        date: "",
    });
 
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from flask server it will be redirected to proxy
        fetch("/time").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    date: data.date,
                });
            })
        );
    }, []);
 
    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.date}</p>
            </header>
        </div>
    );
}
 
export default App;